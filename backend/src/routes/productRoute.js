const {
  productGetController,
  productPutController,
  productPostController,
  productGetByIdController,
  productDeleteController,
} = require("../controllers/productController");
const {
  validatorResult,
  productBodyValidator,
} = require("../middlewares/valitador");

const productRouter = require("express").Router();

const express = require("express");
const mongoose = require("mongoose");
const q2m = require("query-to-mongo");
const db = require("../models");

const multer = require("multer");
const cloudinary = require("../middlewares/cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Products",
  },
});

const cloudinaryMulter = multer({ storage: storage });

productRouter.get("/", productGetController);
productRouter.get("/:productId", productGetByIdController);
productRouter.post(
  "/",
  productBodyValidator,
  validatorResult,
  cloudinaryMulter.single("image"),
  productPostController
);

productRouter.put(
  "/:productId",
  productBodyValidator,
  validatorResult,
  productPutController
);

productRouter.delete("/:productId", productDeleteController);
module.exports = productRouter;

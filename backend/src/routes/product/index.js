// const {
//   productGetController,
//   productPutController,
//   productPostController,
//   productGetByIdController,
//   productDeleteController,
// } = require("../controllers/productController");
// const {
//   validatorResult,
//   productBodyValidator,
// } = require("../middlewares/valitador");

// const productRouter = require("express").Router();

// const express = require("express");
// const mongoose = require("mongoose");
// const q2m = require("query-to-mongo");
// const db = require("../models");

// const multer = require("multer");
// const cloudinary = require("../middlewares/cloudinary");
// const { CloudinaryStorage } = require("multer-storage-cloudinary");

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "Products",
//   },
// });

// const cloudinaryMulter = multer({ storage: storage });

// productRouter.get("/", productGetController);
// productRouter.get("/:productId", productGetByIdController);
// productRouter.post(
//   "/",
//   productBodyValidator,
//   validatorResult,
//   cloudinaryMulter.single("image"),
//   productPostController
// );

// productRouter.put(
//   "/:productId",
//   productBodyValidator,
//   validatorResult,
//   productPutController
// );

// productRouter.delete("/:productId", productDeleteController);
// module.exports = productRouter;

const router = require("express").Router();

const Model = require("../../models/index");
const ApiError = require("../../classes/ApiError");
const Products = new Model("products");

router.get("/", async (req, res, next) => {
  try {
    const response = await Articles.findOne();
    res.json({ data: response });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { rows } = await Articles.findById(req.params.id);
    if (!rows[0]) throw new ApiError(404, "Author");
    res.json({ data: rows[0] });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const response = await Products.save(req.body);
    res.json({ data: response });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;

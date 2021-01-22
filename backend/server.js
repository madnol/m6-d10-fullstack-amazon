//! const express = require("express");
//! const mongoose = require("mongoose");
//! const dotenv = require("dotenv");
//! const cors = require("cors");
//! const productRoute = require("./src/routes/productRoute");
//! const authRoute = require("./src/routes/authRoute");
//! const imageRoute = require("./src/routes/imageRoute");
//! const reviewRoute = require("./src/routes/reviewRoute");

//! const {
//!   badRequestHandler,
//!   forbiddenError,
//!   notFoundHandler,
//!   unauthorizedError,
//!   genericErrorHandler,
//! } = require("./src/helpers/errorHandling");
//! const multer = require("multer");

//! //------------------
//! const server = express();
//! dotenv.config();
//! const port = process.env.PORT;
//! const mongodb_uri = process.env.MONGODB_URI;
//! //-------------------
//! server.use(express.json());
//! server.use(cors());

//! //---------------------
//! server.use("/products", productRoute);
//! server.use("/auth", authRoute);
//! server.use("/reviews", reviewRoute);
//! server.use("/images", imageRoute);
//! //------------------
//! server.use(notFoundHandler);
//! server.use(badRequestHandler);
//! server.use(forbiddenError);
//! server.use(unauthorizedError);
//! server.use(genericErrorHandler);
//! mongoose
//!   .connect(mongodb_uri, { useNewUrlParser: true, useUnifiedTopology: true })
//!   .then(() => console.log("Connected to DB"))
//!   .catch(err => console.log("DB connection error", err));

//! server.listen(port, () => {
//!   console.log("Running on PORT:", port);
//! });

const express = require("express");
require("dotenv").config();
const db = require("./src/helpers/db");
const cors = require("cors");
const productRouter = require("./src/routes/product");
const categoryRouter = require("./src/routes/category");
const userRouter = require("./src/routes/user");
const reviewRouter = require("./src/routes/review");

const {
  badRequestHandler,
  forbiddenError,
  notFoundHandler,
  unauthorizedError,
  genericErrorHandler,
} = require("./src/helpers/errorHandling");

const server = express();

server.use(cors());
server.use(express.json());
server.use("/products", productRouter);
server.use("/categories", categoryRouter);
server.use("/reviews", reviewRouter);

//------------------
server.use(notFoundHandler);
server.use(badRequestHandler);
server.use(forbiddenError);
server.use(unauthorizedError);
server.use(genericErrorHandler);

server.listen(process.env.PORT || 3002, () => {
  console.log("server is running on port ", process.env.PORT || 3002);
});

const router = require("express").Router();

module.exports = () => {
  // const userRouter = require("./user");
  const productRouter = require("./product");
  // const categoryRouter = require("./category");
  // const reviewRouter = require("./review");

  // router.use("/users", userRouter);
  router.use("/products", productRouter);
  // router.use("/categories", categoryRouter);
  // router.use("/reviews", reviewRouter);
};

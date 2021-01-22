const db = require("../models");

exports.productPostController = async (req, res, next) => {
  try {
    const newProduct = new db.Product({ ...req.body });
    newProduct.imageUrl = req.file.path;
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.log("Product POST controller error", error);
    next(error);
  }
};

exports.productGetController = async (req, res, next) => {
  try {
    const allProducts = await db.Product.find();
    if (allProducts) {
      res.status(200).json({ success: true, data: allProducts });
    } else {
      const err = new Error("Products Not Found");
      err.httpStatusCode = 404;
      next(err);
    }
  } catch (error) {
    console.log("Product GET controller error", error);
    next(error);
  }
};

exports.productGetByIdController = async (req, res, next) => {
  try {
    const { productId } = req.params;

    const foundProduct = await db.Product.findById(productId).populate(
      "reviews"
    );

    if (foundProduct)
      return res.status(200).json({ success: true, data: foundProduct });
    const err = new Error("Product Not Found");
    err.httpStatusCode = 404;
    next(err);
  } catch (error) {
    console.log("Product GETBYID controller error", error.name);
    const err = new Error();
    if (error.name == "CastError") {
      err.message = "Product Not Found";
      err.httpStatusCode = 404;
      next(err);
    } else {
      next(err);
    }
  }
};

exports.productPutController = async (req, res, next) => {
  try {
    const { productId } = req.params;

    const editedProduct = await db.Product.findOneAndUpdate(
      { _id: productId },
      {
        $set: { ...req.body },
      },
      { runValidators: true, new: true }
    );

    if (!editedProduct) {
      const err = new Error("Author Not Found");
      err.httpStatusCode = 404;
      next(err);
    }
    res.status(200).json({ success: true, data: editedProduct });
  } catch (error) {
    console.log("Product PUT controller error", error.name);
    const err = new Error();
    if (error.name == "CastError") {
      err.message = "Product Not Found";
      err.httpStatusCode = 404;
      next(err);
    } else {
      next(err);
    }
  }
};

exports.productDeleteController = async (req, res, next) => {
  try {
    const { productId } = req.params;

    const deletedProduct = await db.Product.findByIdAndDelete(productId);

    if (deletedProduct)
      return res.status(200).json({ success: true, data: "OK" });

    const err = new Error("Product Not Found");
    err.httpStatusCode = 404;
    next(err);
  } catch (error) {
    console.log("Product DELETE controller error", error.name);
    const err = new Error();
    if (error.name == "CastError") {
      err.message = "Product Not Found";
      err.httpStatusCode = 404;
      next(err);
    } else {
      next(err);
    }
  }
};

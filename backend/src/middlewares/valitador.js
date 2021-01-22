const { check, validationResult } = require("express-validator");

exports.signupValidator = [
	check("username").notEmpty().trim().withMessage("All fields are required"),
	check("email").isEmail().normalizeEmail().withMessage("Invalid Email"),
	check("password")
		.isLength({ min: 6 })
		.withMessage("Password must be at least 6 characters long"),
];

exports.signinValidator = [
	check("email").isEmail().normalizeEmail().withMessage("Invalid Email"),
	check("password")
		.isLength({ min: 6 })
		.withMessage("Password must be at least 6 characters long"),
];

exports.productBodyValidator = [
  check("name")
    .exists()
    .withMessage("Product name should be exist")
    .notEmpty()
    .withMessage("Product name shouldn't be empty"),

  check("description")
    .exists()
    .withMessage("Product description should be exist")
    .notEmpty()
    .withMessage("Product description shouldn't be empty"),

  check("brand")
    .exists()
    .withMessage("Product brand should be exist")
    .notEmpty()
    .withMessage("Product brand shouldn't be empty"),

  check("price")
    .exists()
    .withMessage("Product price should be exist")
    .notEmpty()
    .withMessage("Product price shouldn't be empty")
    .isNumeric()
    .withMessage("Product price should be a number"),

  check("category")
    .exists()
    .withMessage("Product category should be exist")
    .notEmpty()
    .withMessage("Product category shouldn't be empty"),
];

exports.reviewBodyValidator = [
  check("comment")
    .exists()
    .withMessage("Review should be exist")
    .notEmpty()
    .withMessage("Review shouldn't be empty"),
  check("rate")
    .exists()
    .withMessage("Rate should be exist")
    .notEmpty()
    .withMessage("Rate shouldn't be empty")
    .isNumeric()
    .withMessage("Rate shouldn be a number"),
];

exports.validatorResult = (req, res, next) => {
  const result = validationResult(req);
  const hasError = !result.isEmpty();

  if (hasError) {
    const errorMsg = result.array()[0].msg;
    return res.status(400).json({ success: false, errors: errorMsg });
  }
  next();
};

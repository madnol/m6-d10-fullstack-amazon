const express = require("express");
const { signupController, signinController } = require("../controllers/auth");
const {
	signupValidator,
	signinValidator,
	validatorResult,
} = require("../middlewares/valitador");

const router = express.Router();

router.post("/signup", signupValidator, validatorResult, signupController);

router.post("/signin", signinValidator, validatorResult, signinController);

module.exports = router;

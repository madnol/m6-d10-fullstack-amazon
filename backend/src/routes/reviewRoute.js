const {
	reviewPostController,
	reviewGetController,
	reviewDeleteController,
} = require("../controllers/reviewController");

const {
	validatorResult,
	reviewBodyValidator,
} = require("../middlewares/valitador");

const reviewRouter = require("express").Router();

reviewRouter.get("/", reviewGetController);

reviewRouter.post(
	"/:productId",
	reviewBodyValidator,
	validatorResult,
	reviewPostController
);

reviewRouter.delete("/:reviewId/products/:productId", reviewDeleteController);
// reviewRouter.put(
//   "/:reviewId",
//   reviewBodyValidator,
//   validatorResult,
//   reviewPutController
// );

// reviewRouter.delete("/", reviewDeleteController);

module.exports = reviewRouter;

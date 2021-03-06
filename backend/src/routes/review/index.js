// const {
//   reviewPostController,
//   reviewGetController,
//   reviewDeleteController,
// } = require("../../controllers/reviewController");

// const {
//   validatorResult,
//   reviewBodyValidator,
// } = require("../../middlewares/valitador");

// const reviewRouter = require("express").Router();

// reviewRouter.get("/", reviewGetController);

// reviewRouter.post(
//   "/:productId",
//   reviewBodyValidator,
//   validatorResult,
//   reviewPostController
// );

// reviewRouter.delete("/:reviewId/products/:productId", reviewDeleteController);
// // reviewRouter.put(
// //   "/:reviewId",
// //   reviewBodyValidator,
// //   validatorResult,
// //   reviewPutController
// // );

// // reviewRouter.delete("/", reviewDeleteController);

// module.exports = reviewRouter;

const router = require("express").Router();

const Model = require("../../models/index");
const ApiError = require("../../classes/ApiError");
const Reviews = new Model("reviews");

router.get("/", async (req, res, next) => {
  try {
    const response = await Reviews.findOne();
    res.json({ data: response });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { rows } = await Reviews.findById(req.params.id);
    if (!rows[0]) throw new ApiError(404, "Author");
    res.json({ data: rows[0] });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const response = await Reviews.save(req.body);
    res.json({ data: response });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const response = await Authors.findByIdAndUpdate(req.params.id, req.body);

    if (response.rowCount === 0) throw new ApiError(404, "Author");
    res.json({ data: response });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const response = await Authors.findByIdAndDelete(req.params.id);
    if (response.rowCount === 0) throw new ApiError(404, "Author");
    res.json({ data: "OK" });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;

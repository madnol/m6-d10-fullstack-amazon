const db = require("../models");
const q2m = require("query-to-mongo");
const mongoose = require("mongoose");
exports.reviewPostController = async (req, res, next) => {
	try {
		const { productId } = req.params;
		const newreview = new db.Review({ ...req.body });
		await newreview.save();

		const editedProduct = await db.Product.findByIdAndUpdate(productId, {
			$push: { reviews: newreview },
		});

		res.status(201).json({ success: true, data: newreview });
	} catch (error) {
		console.log("review POST controller error", error);
		next(error);
	}
};

exports.reviewGetController = async (req, res, next) => {
	try {
		const reviews = await db.Review.find(req.query);
		res.send(reviews);
	} catch (error) {
		console.log("review GET controller error", error);
	}
};

exports.reviewPutController = async (req, res, next) => {
	try {
	} catch (error) {
		console.log("review PUT controller error", error);
	}
};

exports.reviewDeleteController = async (req, res, next) => {
	try {
		const { reviewId, productId } = req.params;

		const deletedReview = await db.Review.findByIdAndDelete(reviewId);

		if (deletedReview) {
			const deletedReviewFromProduct = await db.Product.findByIdAndUpdate(
				productId,
				{
					$pull: {
						reviews: {
							_id: mongoose.Schema.Types.ObjectId(reviewId),
						},
					},
				}
			);
			if (deletedReviewFromProduct) {
				res.status(200).json({ success: true, data: "OK" });
			} else {
				const err = new Error();
				err.httpStatusCode = 404;
				next(err);
			}
		}
	} catch (error) {
		console.log("review DELETE controller error", error);
	}
};

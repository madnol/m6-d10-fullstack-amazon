const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema(
	{
		comment: { type: String },
		rate: { type: Number },
	},
	{ timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String },
    description: { type: String },
    brand: { type: String },
    price: { type: Number },
    category: { type: String },
    imageUrl: { type: String },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

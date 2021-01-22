const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  img: { data: Buffer, contentType: String },
});

const image = mongoose.model("image", imageSchema);

module.exports = image;

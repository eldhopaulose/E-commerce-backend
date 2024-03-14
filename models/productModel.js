const mongoose = require("mongoose");
const fs = require("fs");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: [String],
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  categories: {
    type: String,
    required: true,
  },
  discount: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Product", productSchema);

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customerLikeSchema = new Schema({
  customerId: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("CustomerLike", customerLikeSchema);

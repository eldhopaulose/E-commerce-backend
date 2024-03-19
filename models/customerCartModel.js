const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerCartSchema = new Schema({
  customerId: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  totprice: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("CustomerCart", customerCartSchema);

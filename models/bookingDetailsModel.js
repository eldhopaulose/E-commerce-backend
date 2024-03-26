const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for BookingDetails

let BookingDetails = new Schema({
  bookingId: {
    type: String,
    required: true,
    default: () =>
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15),
  },
  bookingDate: {
    type: Date,
    required: true,
  },
  bookingTime: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  address: {
    type: Array,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  product: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("BookingDetails", BookingDetails);

const Booking = require("../models/bookingDetailsModel");
const Product = require("../models/productModel");

// Defined store route

exports.addBooking = async function (req, res) {
  const {
    bookingDate,
    bookingTime,
    userId,
    address,
    totalAmount,
    product,
    name,
  } = req.body;

  if (
    !bookingTime ||
    !userId ||
    !address ||
    !totalAmount ||
    !product ||
    !name
  ) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  try {
    const booking = await Booking.create({
      bookingDate,
      bookingTime,
      userId,
      address,
      totalAmount,
      product,
      name,
    });
    res.status(200).json({ booking });
  } catch (err) {
    console.log(err);
    res.status(400).send("Unable to add booking");
  }
};

// Defined get data(index or listing) route
exports.getBooking = async function (req, res) {
  try {
    const bookings = await Booking.find();
    res.json({ bookings });
  } catch (err) {
    console.log(err);
    res.status(500).send("Unable to retrieve bookings");
  }
};

exports.getBookingById = async function (req, res) {
  const { id } = req.params;
  try {
    const booking = await Product.findById(id);
    res.json({ booking });
  } catch (err) {
    console.log(err);
    res.status(500).send("Unable to retrieve booking");
  }
};

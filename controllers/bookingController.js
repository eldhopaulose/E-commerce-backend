const Booking = require("../models/bookingDetailsModel");

// Defined store route

exports.addBooking = function (req, res) {
  let booking = new Booking(req.body);
  booking
    .save()
    .then((booking) => {
      res.status(200).json({
        booking: "booking in added successfully",
        bookingId: booking._id,
      });
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
};

// Defined get data(index or listing) route
exports.getBooking = async function (req, res) {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    console.log(err);
    res.status(500).send("Unable to retrieve bookings");
  }
};

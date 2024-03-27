const express = require("express");

const router = express.Router();

const bookingController = require("../controllers/bookingController");

router.post("/addBooking", bookingController.addBooking);
router.get("/getBooking", bookingController.getBooking);
router.get("/getBookingById/:id", bookingController.getBookingById);

module.exports = router;

const express = require("express");
const {
  customerLogin,
  customerSignup,
  getSingleCustomer,
} = require("../controllers/coustomerAuthController");

const router = express.Router();

router.post("/login", customerLogin);
router.post("/signup", customerSignup);
router.get("/single", getSingleCustomer);

module.exports = router;

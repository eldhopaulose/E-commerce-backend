const express = require("express");
const {
  customerLogin,
  customerSignup,
  getSingleCustomer,
} = require("../controllers/coustomerAuthController");
const requireCustomerAuth = require("../middleware/requireCustomerAuth");

const router = express.Router();

router.post("/login", customerLogin);
router.post("/signup", customerSignup);
router.use(requireCustomerAuth);
router.get("/single", getSingleCustomer);

module.exports = router;

var express = require("express");
const {
  loginUser,
  signupUser,
  getSingleUser,
} = require("../controllers/userController");

var router = express.Router();

/* GET users listing. */
router.post("/login", loginUser);
router.post("/signup", signupUser);
router.get("/single/:id", getSingleUser);

module.exports = router;

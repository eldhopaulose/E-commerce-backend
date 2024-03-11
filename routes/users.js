var express = require("express");
const {
  loginUser,
  signupUser,
  getSingleUser,
} = require("../controllers/userController");
const requireAdminAuth = require("../middleware/requireAdminAuth");

var router = express.Router();

/* GET users listing. */
router.post("/login", loginUser);
router.post("/signup", signupUser);
router.use(requireAdminAuth);
router.get("/single", getSingleUser);

module.exports = router;

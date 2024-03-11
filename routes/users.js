var express = require("express");
const { loginUser, signupUser } = require("../controllers/userCOntroller");

var router = express.Router();

/* GET users listing. */
router.post("/login", loginUser);
router.post("/signup", signupUser);

module.exports = router;

const Customer = require("../models/customerAuthModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// login a customer
const customerLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const customer = await Customer.login(email, password);

    // create a token
    const token = createToken(customer._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup a customer
const customerSignup = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const customer = await Customer.signup(email, password, name);

    // create a token
    const token = createToken(customer._id);

    res.status(200).json({ email, token, name });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get single customer
const getSingleCustomer = async (req, res) => {
  try {
    const user_id = req.user._id; // Assuming the user ID is passed as a parameter in the request

    const user = await Customer.findById(user_id).select("-password"); // Exclude the password field from the response
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { customerSignup, customerLogin, getSingleCustomer };

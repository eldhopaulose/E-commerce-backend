const express = require("express");

const router = express.Router();

const {
  getAllProducts,
  getSingleProduct,
} = require("../controllers/customerProduct");

// get all products

router.get("/:categories", getAllProducts);

// get a single product

router.get("/product/:id", getSingleProduct);

module.exports = router;

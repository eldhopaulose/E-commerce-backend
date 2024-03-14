const express = require("express");

const router = express.Router();

const {
  getAllProducts,
  getSingleProduct,
  getProductsByCategory,
} = require("../controllers/customerProduct");

// get all products

router.get("/", getAllProducts);
router.get("/:category", getProductsByCategory);

// get a single product

router.get("/product/:id", getSingleProduct);

module.exports = router;

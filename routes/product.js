const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productControlleer");

// get all products
router.get("/", getAllProducts);

// get a single product

router.get("/:id", getSingleProduct);

// create a product

router.post("/", createProduct);

// update a product

router.put("/:id", updateProduct);

// delete a product

router.delete("/:id", deleteProduct);

module.exports = router;

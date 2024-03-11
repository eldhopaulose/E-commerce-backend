const express = require("express");
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productCOntrolleer");
const router = express.Router();

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

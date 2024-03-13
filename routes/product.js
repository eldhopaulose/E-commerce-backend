const express = require("express");
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  deleteProductImage,
} = require("../controllers/productController");
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

//delete image

router.delete("/image/:id", deleteProductImage);

module.exports = router;

const express = require("express");

const requireCustomerAuth = require("../middleware/requireCustomerAuth");

const router = express.Router();

const {
  getAllProducts,
  getSingleProduct,
  getProductsByCategory,
  likeProduct,
  unlikeProduct,
  displayLikedProducts,
  displayLikedAllProducts,
  createAddress,
  getAddress,
  updateAddress,
} = require("../controllers/customerProduct");

// get all products

router.get("/", getAllProducts);
router.get("/:category", getProductsByCategory);

// get a single product

router.get("/product/:id", getSingleProduct);

router.use(requireCustomerAuth); // Protect all routes below this middleware

// like and unlike product
router.post("/like/:id", likeProduct);
router.post("/unlike/:id", unlikeProduct);
router.get("/like/display", displayLikedProducts);
router.get("/like/displayall", displayLikedAllProducts);

router.post("/adress", createAddress);
router.get("/adress", getAddress);
router.put("/adress/:id", updateAddress);

module.exports = router;

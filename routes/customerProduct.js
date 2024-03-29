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
  getAddresss,
  updateAddress,
  createCart,
  displayCart,
  deleteCartItem,
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

// create address
router.post("/address/create", createAddress);
router.get("/address/display", getAddresss);
router.put("/address/update/:id", updateAddress);

// create cart
router.post("/cart/create", createCart);
router.get("/cart/display", displayCart);
router.delete("/cart/delete/:id", deleteCartItem);

module.exports = router;

const CustomerLike = require("../models/customerLikeModel");
const Product = require("../models/productModel");
const Address = require("../models/addressModel");

// get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Find products based on category
    res.status(200).json({ products }); // Send products in the response
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get prducts by category

// get products by category
const getProductsByCategory = async (req, res) => {
  // Get category from the request parameters
  const { category } = req.params;
  try {
    const products = await Product.find({ categories: category });
    res.status(200).json({ products });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get a single product
const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const product = await Product.findById(id);
    res.status(200).json({ product });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//customer like product

// like product
const likeProduct = async (req, res) => {
  const { id } = req.params;
  const user_id = req.user._id;
  console.log(user_id);
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(400).json({ message: "Product not found" });
    }
    const existingLike = await CustomerLike.findOne({
      customerId: user_id,
      productId: id,
    });
    if (existingLike) {
      return res.status(400).json({ message: "Product already liked" });
    }

    const likedProduct = await CustomerLike.create({
      customerId: user_id,
      productId: id,
    });

    // Combine likedProduct and newLike into a single response
    res.status(200).json({ likedProduct });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// unlike product
const unlikeProduct = async (req, res) => {
  const { id } = req.params;
  const user_id = req.user._id;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(400).json({ message: "Product not found" });
    }
    const existingLike = await CustomerLike.findOne({
      customerId: user_id,
      productId: id,
    });
    if (!existingLike) {
      return res.status(400).json({ message: "Product not liked" });
    }
    await CustomerLike.findByIdAndDelete(existingLike._id);
    res.status(200).json({ message: "Product unliked" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//display liked products
const displayLikedProducts = async (req, res) => {
  const user_id = req.user._id;
  console.log("user_id");
  console.log("user_id");
  console.log("user_id");
  try {
    const likedProducts = await CustomerLike.find({ customerId: user_id });
    res.status(200).json({ likedProducts });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const displayLikedAllProducts = async (req, res) => {
  const user_id = req.user._id; // Assuming user ID is stored in req.user._id
  try {
    // Find liked products based on customer ID
    const likedProducts = await CustomerLike.find({
      customerId: user_id,
    }).lean();

    // Extracting liked product IDs
    const likedProductIds = likedProducts.map((like) => like.productId);

    // Fetch product details based on the liked product IDs
    const products = await Product.find({ _id: { $in: likedProductIds } });

    // Map product details to liked products
    const likedProductsWithDetails = likedProducts.map((like) => {
      const productDetails = products.find((product) =>
        product._id.equals(like.productId)
      );
      return { ...like, product: productDetails };
    });

    res.status(200).json({ likedProducts: likedProductsWithDetails });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// //create address
// const createAddress = async (req, res) => {
//   const {
//     name,
//     address,
//     city,
//     state,
//     district,
//     pinCode,
//     mobileNumber,
//     country,
//   } = req.body;
//   const user_id = req.user._id;
//   try {
//     const newAddress = await Address.create({
//       user_id,
//       name,
//       address,
//       city,
//       state,
//       district,
//       pinCode,
//       mobileNumber,
//       country,
//     });
//     res.status(200).json({ newAddress });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// //get address

// const getAddresss = async (req, res) => {
//   const user_id = req.user._id;
//   console.log("asasasasasas");
//   try {
//     const address = await Address.find({ user_id });
//     res.status(200).json({ address });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// //update address
// const updateAddress = async (req, res) => {
//   const { id } = req.params;
//   const { name, address, country, state, district, pinCode, mobileNumber } =
//     req.body;
//   try {
//     const updatedAddress = await Address.findByIdAndUpdate(id, {
//       name,
//       address,
//       state,
//       district,
//       pinCode,
//       mobileNumber,
//       country,
//     });
//     res.status(200).json({ updatedAddress });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

module.exports = {
  getAllProducts,
  getSingleProduct,
  getProductsByCategory,
  likeProduct,
  unlikeProduct,
  displayLikedProducts,
  displayLikedAllProducts,
}; // Export the functions

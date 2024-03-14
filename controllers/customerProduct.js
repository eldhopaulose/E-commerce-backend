const mongoose = require("mongoose");
const Product = require("../models/productModel");

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
  try {
    const product = await Product.findById(id);
    res.status(200).json({ product });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllProducts, getSingleProduct, getProductsByCategory }; // Export the functions

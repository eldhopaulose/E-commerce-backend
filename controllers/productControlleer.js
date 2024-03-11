const mongoose = require("mongoose");
const Product = require("../models/productModel");

// get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
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

// create a product
const createProduct = async (req, res) => {
  const { name, image, about, price, discount } = req.body;

  try {
    const product = await Product.create({
      name,
      image,
      about,
      price,
      discount,
    });
    res.status(201).json({ product });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update a product
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, image, about, price, discount } = req.body;

  try {
    const product = await Product.findByIdAndUpdate(
      id,
      { name, image, about, price, discount },
      { new: true }
    );
    res.status(200).json({ product });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a product
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByIdAndDelete(id);
    res.status(200).json({ product });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};

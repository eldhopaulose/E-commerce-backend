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
    const exists = await Product.findById(id);
    if (!exists) {
      throw new Error("Product not found");
    }

    const product = await Product.findByIdAndDelete(id);
    res.status(200).json({ product, message: "Product deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete product image
const deleteProductImage = async (req, res) => {
  const { id } = req.params;
  const { image } = req.body;
  console.log(image);
  console.log(id, image);
  try {
    const product = await Product.findById(id);
    if (!product) {
      throw new Error("Product not found");
    }
    const index = product.image.indexOf(image);
    if (index > -1) {
      product.image.splice(index, 1);
    }
    await product.save();
    res
      .status(200)
      .json({ product, message: "Product image deleted successfully" });
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
  deleteProductImage,
};

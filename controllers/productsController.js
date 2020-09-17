const Product = require("../models/ProductModel");
module.exports = {
  createProduct: async (req, res) => {
    try {
      let product = new Product(req.body);
      product = await product.save();
      res.json(product);
    } catch (error) {
      res.json(error);
    }
  },
  getAllProducts: async (req, res) => {
    console.log("olgy req user Id is: ", req.userId);
    try {
      const products = await Product.find();
      res.json({ products });
    } catch (error) {
      res.json(error);
    }
  },
  getOneProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.json({});
      }
      res.json(product);
    } catch (error) {
      res.json(error);
    }
  },
  updateOneProduct: async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        {
          new: true,
        }
      );
      res.json(product);
    } catch (error) {
      res.json(error);
    }
  },
  deleteOneProduct: async (req, res) => {
    try {
      const product = await Product.findByIdAndRemove(req.params.id);
      res.json(product);
    } catch (error) {
      res.json(error);
    }
  },
};

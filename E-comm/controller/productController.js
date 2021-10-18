const productsModel = require("../models/Products");

const createProduct = async (req, res) => {
  try {
    const product = await new productsModel(req.body);
    product.save();

    res.status(201).send(product);
  } catch (error) {}
};

const getProducts = async (req, res) => {
  try {
    const products = await productsModel.find({});
    res.status(200).send(products);
  } catch (error) {}
};

const getproductDetail = async (req, res) => {
  try {
    const productName = req.params.name
    const productDetail = await productsModel.find({name:productName})
    res.status(200).send(productDetail);
  } catch (error) {
    console.log(error)
  }
};

const updateProduct = async (req, res) => {
  try {
    const productName = req.params.name
    const updateProduct = await productsModel.updateOne({name:productName}, { $set:req.body} );
    res.status(200).send(updateProduct);
  } catch (error) {
    console.log(error)
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productName = req.params.name
    const deleteProduct = await productsModel.deleteOne({name:productName});
    res.status(200).send(deleteProduct);
  } catch (error) {
      console.log(error)
  }
};

module.exports = {
  createProduct,
  getProducts,
  getproductDetail,
  updateProduct,
  deleteProduct,
};

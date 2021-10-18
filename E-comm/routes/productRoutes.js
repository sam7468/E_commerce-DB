const express = require("express");

const Router = express.Router();

const {
  createProduct,
  getProducts,
  getproductDetail,
  updateProduct,
  deleteProduct,
} = require("../controller/productController");

Router.get("/products", getProducts);
Router.post("/products", createProduct);
Router.get("/products/:name", getproductDetail);
Router.put("/products/:name", updateProduct);
Router.delete("/products/:name", deleteProduct);

module.exports = Router;
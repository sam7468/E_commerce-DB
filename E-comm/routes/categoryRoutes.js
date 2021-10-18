const express = require("express");

const Router = express.Router();

const {
  createCategory,
  getCategories,
  getcategoryDetail,
  updateCategory,
  deleteCategory,
} = require("../controller/categoryController");

Router.get("/categories", getCategories);
Router.post("/categories", createCategory);
Router.get("/categories/:name", getcategoryDetail);
Router.put("/categories/:name", updateCategory);
Router.delete("/categories/:name", deleteCategory);

module.exports = Router;

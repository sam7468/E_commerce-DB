const categoryModel = require("../models/Categories");

const createCategory = async (req, res) => {
  try {
    const category = await new categoryModel(req.body);
    category.save();

    res.status(201).send(category);
  } catch (error) {}
};

const getCategories = async (req, res) => {
  try {
    const categories = await categoryModel.find({});
    res.status(200).send(categories);
  } catch (error) {}
};

const getcategoryDetail = async (req, res) => {
  try {
    const categoryName = req.params.name
    const categoryDetail = await categoryModel.find({name:categoryName})
    res.status(200).send(categoryDetail);
  } catch (error) {
    console.log(error)
  }
};

const updateCategory = async (req, res) => {
  try {
    const categoryName = req.params.name
    const updateCategory = await categoryModel.updateOne({name:categoryName}, { $set:req.body} );
    res.status(200).send(updateCategory);
  } catch (error) {
    console.log(error)
  }
};

const deleteCategory = async (req, res) => {
  try {
    const categoryName = req.params.name
    const deleteCategory = await categoryModel.deleteOne({name:categoryName});
    res.status(200).send(deleteCategory);
  } catch (error) {
      console.log(error)
  }
};

module.exports = {
  createCategory,
  getCategories,
  getcategoryDetail,
  updateCategory,
  deleteCategory,
};

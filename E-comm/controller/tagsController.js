const tagsModel = require("../models/Tags");

const createTag = async (req, res) => {
  try {
    const tag = await new tagsModel(req.body);
    tag.save();

    res.status(201).send(tag);
  } catch (error) {}
};

const getTags = async (req, res) => {
  try {
    const tag = await tagsModel.find({});
    res.status(200).send(tag);
  } catch (error) {}
};

const gettagDetail = async (req, res) => {
  try {
    const tagName = req.params.name
    const tagDetail = await tagsModel.find({name:tagName})
    res.status(200).send(tagDetail);
  } catch (error) {
    console.log(error)
  }
};

const updateTag = async (req, res) => {
  try {
    const tagName = req.params.name
    const updateTag = await tagsModel.updateOne({name:tagName}, { $set:req.body} );
    res.status(200).send(updateTag);
  } catch (error) {
    console.log(error)
  }
};

const deleteTag = async (req, res) => {
  try {
    const tagName = req.params.name
    const deleteTag = await tagsModel.deleteOne({name:tagName});
    res.status(200).send(deleteTag);
  } catch (error) {
      console.log(error)
  }
};

module.exports = {
  createTag,
  getTags,
  gettagDetail,
  updateTag,
  deleteTag,
};

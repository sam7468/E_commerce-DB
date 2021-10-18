const usersModel = require("../models/Users");

const createUser = async (req, res) => {
  try {
    const user = await new usersModel(req.body);
    user.save();

    res.status(201).send(user);
  } catch (error) {}
};

const getUsers = async (req, res) => {
  try {
    const users = await usersModel.find({});
    console.log(users)
    res.status(200).send(users);
  } catch (error) {}
};

const getuserDetail = async (req, res) => {
  try {
    const userEmail = req.params.email
    const userDetail = await usersModel.find({email:userEmail})
    res.status(200).send(userDetail);
  } catch (error) {
    console.log(error)
  }
};

const updateuser = async (req, res) => {
  try {
    const userEmail = req.params.email
    const updateUser = await usersModel.updateOne({email:userEmail}, { $set:req.body} );
    res.status(200).send(updateUser);
  } catch (error) {
    console.log(error)
  }
};

const deleteUser = async (req, res) => {
  try {
    const userEmail = req.params.email
    const deleteUser = await usersModel.deleteOne({email:userEmail});
    res.status(200).send(deleteUser);
  } catch (error) {
      console.log(error)
  }
};

module.exports = {
  createUser,
  getUsers,
  getuserDetail,
  updateuser,
  deleteUser,
};

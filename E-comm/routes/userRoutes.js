const express = require("express");

const Router = express.Router();

const {
  createUser,
  getUsers,
  getuserDetail,
  updateuser,
  deleteUser,
} = require("../controller/userController");

Router.get("/users", getUsers);
Router.post("/users", createUser);
Router.get("/users/:email", getuserDetail);
Router.put("/users/:email", updateuser);
Router.delete("/users/:email", deleteUser);

module.exports = Router;

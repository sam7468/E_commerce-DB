const express = require("express");

const Router = express.Router();

const {
    createRole,
    getRoles,
    getroleDetail,
    updateRole,
    deleteRole,
  } = require("../controller/roleController");

Router.get("/roles", getRoles);
Router.post("/roles", createRole);
Router.get("/roles/:name", getroleDetail);
Router.put("/roles/:name", updateRole);
Router.delete("/roles/:name", deleteRole);

module.exports = Router;
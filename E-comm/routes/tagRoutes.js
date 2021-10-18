const express = require("express");

const Router = express.Router();

const {
    createTag,
    getTags,
    gettagDetail,
    updateTag,
    deleteTag,
  } = require("../controller/tagsController");

Router.get("/tags", getTags);
Router.post("/tags", createTag);
Router.get("/tags/:name", gettagDetail);
Router.put("/tags/:name", updateTag);
Router.delete("/tags/:name", deleteTag);

module.exports = Router;
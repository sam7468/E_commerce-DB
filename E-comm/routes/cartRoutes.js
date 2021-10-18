const express = require("express");

const Router = express.Router();

const {
    createCart,
    getCarts,
    getcartDetail,
    updateCart,
    deleteCart,
  } = require("../controller/cartsController");

Router.get("/carts", getCarts);
Router.post("/carts", createCart);
Router.get("/carts/:email", getcartDetail);
Router.put("/carts/:email", updateCart);
Router.delete("/carts/:email", deleteCart);

module.exports = Router;
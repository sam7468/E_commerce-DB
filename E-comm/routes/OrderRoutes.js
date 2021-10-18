const express = require("express");

const Router = express.Router();

const {
    createOrder,
    getOrders,
    getorderDetail,
    updateOrder,
    deleteOrder,
  } = require("../controller/ordersController");

Router.get("/orders", getOrders);
Router.post("/orders", createOrder);
Router.get("/orders/:email", getorderDetail);
Router.put("/orders/:email", updateOrder);
Router.delete("/orders/:email", deleteOrder);

module.exports = Router;
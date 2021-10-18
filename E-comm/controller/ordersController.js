const ordersModel = require("../models/Orders");

const createOrder = async (req, res) => {
  try {
    const order = await new ordersModel(req.body);
    order.save();

    res.status(201).send(order);
  } catch (error) {}
};

const getOrders = async (req, res) => {
  try {
    const order = await ordersModel.find({});
    res.status(200).send(order);
  } catch (error) {}
};

const getorderDetail = async (req, res) => {
  try {
    const userName = req.params.email
    const orderDetail = await ordersModel.find({user:userName})
    res.status(200).send(orderDetail);
  } catch (error) {
    console.log(error)
  }
};

const updateOrder = async (req, res) => {
  try {
    const userName = req.params.email
    const updateOrder = await ordersModel.updateOne({user:userName}, {$set:req.body} );
    res.status(200).send(updateOrder);
  } catch (error) {
    console.log(error)
  }
};

const deleteOrder = async (req, res) => {
  try {
    const userName = req.params.email
    const deleteOrder = await ordersModel.deleteOne({user:userName});
    res.status(200).send(deleteOrder);
  } catch (error) {
      console.log(error)
  }
};

module.exports = {
  createOrder,
  getOrders,
  getorderDetail,
  updateOrder,
  deleteOrder,
};

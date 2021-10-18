const cartsModel = require("../models/Carts");

const createCart = async (req, res) => {
  try {
    const cart = await new cartsModel(req.body);
    cart.save();

    res.status(201).send(cart);
  } catch (error) {}
};

const getCarts = async (req, res) => {
  try {
    const carts = await cartsModel.find({});
    res.status(200).send(carts);
  } catch (error) {}
};

const getcartDetail = async (req, res) => {
  try {
    const cartUsername = req.params.email
    const cartDetail = await cartsModel.find({user:cartUsername})
    res.status(200).send(cartDetail);
  } catch (error) {
    console.log(error)
  }
};

const updateCart = async (req, res) => {
  try {
    const cartUsername = req.params.email
    const updateCart = await cartsModel.updateOne({user:cartUsername}, { $set:req.body} );
    res.status(200).send(updateCart);
  } catch (error) {
    console.log(error)
  }
};

const deleteCart = async (req, res) => {
  try {
    const cartUsername = req.params.email
    const deleteCart = await cartsModel.deleteOne({user:cartUsername});
    res.status(200).send(deleteCart);
  } catch (error) {
      console.log(error)
  }
};

module.exports = {
  createCart,
  getCarts,
  getcartDetail,
  updateCart,
  deleteCart,
};

const rolesModel = require("../models/Roles");

const createRole = async (req, res) => {
  try {
    const role = await new rolesModel(req.body);
    role.save();

    res.status(201).send(role);
  } catch (error) {}
};

const getRoles = async (req, res) => {
  try {
    const roles = await rolesModel.find({});
    console.log(roles)
    res.status(200).send(roles);
  } catch (error) {}
};

const getroleDetail = async (req, res) => {
  try {
    const roleName = req.params.name
    const roleDetail = await rolesModel.find({name:roleName})
    res.status(200).send(roleDetail);
  } catch (error) {
    console.log(error)
  }
};

const updateRole = async (req, res) => {
  try {
    const roleName = req.params.name
    const updateRole = await rolesModel.updateOne({name:roleName}, { $set:req.body} );
    res.status(200).send(updateRole);
  } catch (error) {
    console.log(error)
  }
};

const deleteRole = async (req, res) => {
  try {
    const roleName = req.params.name
    const deleteRole = await rolesModel.deleteOne({name:roleName});
    res.status(200).send(deleteRole);
  } catch (error) {
      console.log(error)
  }
};

module.exports = {
  createRole,
  getRoles,
  getroleDetail,
  updateRole,
  deleteRole,
};

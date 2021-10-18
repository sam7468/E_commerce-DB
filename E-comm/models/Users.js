const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  email: {
    type:String,
    unique:true
  },
  role: String,
  profile_image: String,
  password: String
},{
  versionKey:false
});

const usersModel = mongoose.model("Users", userSchema);

module.exports = usersModel;

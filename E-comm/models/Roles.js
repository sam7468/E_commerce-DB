const mongoose = require('mongoose')

const roleSchema = mongoose.Schema({
    name:{
        type:String,
        unique:true    
    },
    slug:String
},{
    versionKey:false
})

const rolesModel = mongoose.model("Roles",roleSchema)

module.exports = rolesModel
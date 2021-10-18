const mongoose = require('mongoose')

const TagSchema = mongoose.Schema({
    name:{
        type:String,
        unique:true    
    },
    slug:String
},{
    versionKey:false
})

const tagsModel = mongoose.model("Tags",TagSchema)

module.exports = tagsModel
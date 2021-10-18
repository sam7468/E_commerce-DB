const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    name:String,
    slug:String,
    image:String,
    description:String
},{
    versionKey:false
})

const categoryModel = mongoose.model("Categories",categorySchema)

module.exports = categoryModel
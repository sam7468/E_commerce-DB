const mongoose = require('mongoose')

const productsSchema = mongoose.Schema({
    name:String,
    category_name:String,
    description:String,
    additional_information:String,
    thumbnail:String,
    product_gallery:[{type:Object}],
    base_price:Number,
    sell_price:Number,
    tags:[{type:String}]
},{
    versionKey:false
})

const productsModel = mongoose.model("Products",productsSchema)

module.exports = productsModel
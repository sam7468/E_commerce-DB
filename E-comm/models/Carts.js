const mongoose = require('mongoose')

const cartsSchema = mongoose.Schema({
    product: String,
    base_price:Number,
    sell_price:Number,
    total_price:Number,
    product_qty:Number,
    user:{
        type:String,
        unique:true
    }
},{
    versionKey:false
})

const cartsModel = mongoose.model("Carts",cartsSchema)

module.exports = cartsModel
const mongoose = require('mongoose')

const ordersSchema = mongoose.Schema({
    user:{
        type:String,
        unique:true
    },
    total_items:Number,
    products:[{type:String}],
    billing_address:String,
    shipping_address:String,
    transaction_status:String,
    payment_mode:String,
    payment_status:String,
    order_status:String
},{
    versionKey:false
})

const ordersModel = mongoose.model("Orders",ordersSchema)

module.exports = ordersModel
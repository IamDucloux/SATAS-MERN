const { Schema, model } = require('mongoose');
const Product = require('../models/product.model');


const orderSchema = new Schema ({
    
    number: {
        type: Number,
        required: true,
        unique: true
    },

    products: [{name: String, price: number}],

    observations: {
        type: String,

    }




}, {
    timestamps: true
});


module.exports = model('Order', orderSchema);
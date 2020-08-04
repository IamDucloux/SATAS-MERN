const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },

    description: String,
    price: {
        type: Number,
        required: true,
        default: 0
    }

}, {
    timestamps: true
});


module.exports = model('Product', productSchema);
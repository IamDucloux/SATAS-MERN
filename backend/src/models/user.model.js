const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
    name: {
        type: String,
        required: true,

    },
    lastname:{
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        //TODO -ENCRYPT THIS IN A FUTURE UPDATE!!
        type: String,
        required: true,
        
    }


}, {
    timestamps: true
});




module.exports = model('User', userSchema);
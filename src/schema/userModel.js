const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        first_Name: {
            type: String
        },
        last_Name: {
            type: String
        },
        phone_Number: {
            type: Number
        },
        email: {
            type: String,
            unique : true,
            require: [true, 'A user must have a email']
        },
        role: {
            type: String,
            default: 'user',
        },
        image: {
            type: String,
        },
    },

);

const User = mongoose.model('User', userSchema);

module.exports = User;
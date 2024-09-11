const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            unique : true,
            require: [true, 'A user must have a email']
        }
    },

);

const User = mongoose.model('User', userSchema);

module.exports = User;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
        _id: mongoose.Schema.Types.ObjectId,
        firstName: {
            type: String,
            index: true
        },
        lastName: {
            type: String,
            require: true
        },
        friends: {
            type: Array,
            require: true
        }
    })
    // mongoose.set('useCreateIndex', true);
module.exports = mongoose.model('User', userSchema);
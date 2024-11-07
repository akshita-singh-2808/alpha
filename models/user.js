const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Call the db to connect the mongo db
dbconnect()

// User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String
    }
});

const User = module.exports = mongoose.model('User', UserSchema);
module.exports=User;
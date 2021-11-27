const mongoose = require('mongoose');

const userSchema =  new mongoose.Schema({
    name : String,
    age : Number
})

// The below ines create a 'User' Collection in the database which will have the above userSchema
module.exports =  mongoose.model("User" , userSchema)
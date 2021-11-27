//! Inside schema typr there are 2 important thing
//? 1 . Schema Type
//? 2 . Schema Validation


const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    street : String,
    city : String
})

const userSchema =  new mongoose.Schema({
    name : String,
    age : Number,
    email : String,
    createdAt : Date,
    updatedAt : Date,
    bestfriend : mongoose.SchemaTypes.ObjectId,
    hobbies : [String],
    // address : {
    //     street : String,
    //     city : String
    // }
    //? Declearing schema for a perticular field will give you the unique 'ObjectId' also
    address : addressSchema 
})

// The below lines create a 'User' Collection in the database which will have the above userSchema
module.exports =  mongoose.model("User" , userSchema)
//! Inside schema typr there are 2 important thing
//? 1 . Schema Type
//? 2 . Schema Validation


const mongoose = require('mongoose');


const addressSchema = new mongoose.Schema({
    street : String,
    city : String
})


const userSchema =  new mongoose.Schema({
    name : {
        type : String,
        uppercase : true,
    },
    age :{
        type : Number,
        min : 1,
        max : 100,
        validate : {
            validator : (val) => val % 2 === 0 ,
            message : props => `${props.value} is not an even number` 
        }
    },
    email : {
        type : String,
        minlength : 10,
        required : true,
        lowercase : true
    },
    createdAt : {
        type : Date,
        immutable : true, //? immutable -> Value not changeable
        // default : Date.now()
        // default : new Date()
        //? If you have given the date then it will take that otherwise it will take the default
        default : () => Date.now()

    },
    updatedAt : {
        type : Date,
        default : () => Date.now()
    },
    bestfriend : mongoose.SchemaTypes.ObjectId,
    hobbies : [String],
    address : addressSchema 
})


// The below lines create a 'User' Collection in the database which will have the above userSchema
module.exports =  mongoose.model("User" , userSchema)


/* Various schema Validator
1. type
2. required
3. default
4. lowercase
5. uppercase
6. immutable
7. min
8. max
9. minlength
10. maxlength
11. validate
*/ 
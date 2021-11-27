const mongoose = require('mongoose');
const User = require('./User');


// mongoose.connect("mongodb://localhost/testdb", 
//     () => {
//         console.log("Connected")
//     }, 
//     e => console.error(e)
// )
mongoose.connect("mongodb://localhost/testdb")

//! 3 MAIN CONCEPTS UNDER MongoDB
//* 1 Schema
//* 2 Model 
//* 3 Query


//! Method 1 of creating user
//?  Craeating a new user Object using Promish
// const abir = new User({name : "Abir Pal", age : 30});
// console.log(abir);
// abir.save()
//     .then(() => console.log("New User Saved..."))
//     .catch(() => console.log("Data Cannot be Saved..."));


//?  Craeating a new user Object using async and await
// async function run(){
//     const user = new User({name : "Anish", age : 20})
//     console.log(user);
//     await user.save()
// }
// run()


//! Method 2 of creating user and updating 'current user'
// async function run(){
//     const user = await User.create({name : "Rupam", age : 20})
//     //* For updating a user
//     user.name = "Sayan" // This will not update the user in the Database 
//     await user.save(); // This will save the data to the database
//     console.log(user);
// }
// run()



//! Method 2 of creating user and updating 'current user'
async function run(){
    const user = await User.create({
        name : "Shuvrak", 
        age : 45,
        hobbies : ["Gamming", "Swimming", "Converseation"],
        address : {
            street : "Gorai Road",
            city : "Asansol"
        }
    })
    
    console.log(user);
}
run()

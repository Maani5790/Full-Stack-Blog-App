const mongoose = require("mongoose");
const {MONGODB_CONNECTION_STRING} = require("../config/index"); 


// const connection = "mongodb+srv://blog:abd235ul1022@blog.4dhknb8.mongodb.net/blog?retryWrites=true&w=majority"

const connectMongo = async () =>{
   try{
    await mongoose.connect(MONGODB_CONNECTION_STRING);
    console.log("connected database")

   } catch(error){
    console.log("error")
   }
}

module.exports = connectMongo;
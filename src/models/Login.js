const  mongoose = require("mongoose");





const mixdataSchema = new mongoose.Schema({
    name:{
    type: String
  } ,
  email:{
    type:String
  },
  message:{
    type:String
  }
  });


  

  const user = new mongoose.model("user",mixdataSchema);

  module.exports = user;
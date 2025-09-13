const mongoose = require("mongoose");

const recruiterschema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female", "others"],
  },
  empRange:{
    type: String,
    required: true,
    enum: ["1-100","100-500","500-1000"],
  },
  company: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  designation: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    default: true,
  },
  address: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
    unique: true,


  },
});

const recruiter = mongoose.model("recruiter", recruiterschema);

module.exports = recruiter;
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
   type: String,
   required: [true, 'please add a name']
  },

  email: {
    type: String,
    required: [true, 'please add a email'],
    unique: true,
    trim: true,
    match: [
     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
     "please enter a valid email"
    ]
  },

  password: {
   type: String,
   required: [true, 'please add a password'],
   minLength: [6, "Password must be up to 6 characters"],
   maxLength: [23, "Password must not be more than  23 characters"]
  },

  photo:{
   type: String,
   required: true,
   default: "https://t4.ftcdn.net/jpg/03/73/50/09/360_F_373500999_wAWkzJZRb2XHm9KeHEDcCJBkx4wR67us.jpg",
  },

  phone: {
    type: String,
    default: "+2526",
  },

  bio: {
    type: String,
    maxLength: [250, "bio must not be more than 250 characters"],
    default: "bio",
  },
}, {timestamps: true});


const User = mongoose.model('User', userSchema);

export default User;
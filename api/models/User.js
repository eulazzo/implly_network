const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

  username:{
    type:String,
    required:true,
    min: 3,
    max: 20,
    unique:true
  },

  email:{
    type:String,
    required:true,
    unique:true,
    max:50
  },

  password:{
    type:String,
    required:true,
    min:6,
    max:32
  },

  profilePicture:{
    type:String,
    default:""
  },

  coverPicture:{
    type:String,
    default:""
  },

  followers:{
    type:Array,
    default:[]
  },

  followings:{
    type:Array,
    default:[]
  },

  isAdmin:{
    type:Boolean,
    default:false
  },
  
  bio :{
    type:String,
    max:50
  },
  
  city:{
    type:String,
    max:50
  },

  from:{
    type:String,
    max:50
  },

  relationship:{
    type:Number,
    enum:[1,2,3]
  }


}, //this tells Mongoose to automatically manage createdAt and updatedAt properties.
  {timestamps:true}
)

module.exports = mongoose.model("User",UserSchema);
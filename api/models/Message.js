const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema(
  {
    conversationId:{
      type:String,
    },   
    senderId:{
      type:String
    },
    text:{
      type:String
    }
  }, //this tells Mongoose to automatically manage createdAt and updatedAt properties.
  {timestamps:true}
)

module.exports = mongoose.model("Message",MessageSchema);
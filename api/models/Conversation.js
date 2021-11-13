const mongoose = require('mongoose')

const ConversationSchema = new mongoose.Schema(
  {
    members:{
      type:Array
    }
  }, //this tells Mongoose to automatically manage createdAt and updatedAt properties.
  {timestamps:true}
)

module.exports = mongoose.model("Conversation",ConversationSchema);
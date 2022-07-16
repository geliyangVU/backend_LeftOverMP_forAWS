const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MessageSchema = new mongoose.Schema({
    ConversationId: {
        type: String,
    },
    senderId:{
        type: String,
    },
    text : {
        type: String,
    }
});

let Message = mongoose.model("Message", MessageSchema)

module.exports = Message;
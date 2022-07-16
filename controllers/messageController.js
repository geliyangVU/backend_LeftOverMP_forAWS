const express = require('express')
const Message = require('../models/Message')


const sendMessage = async (req, res) => {
    const newMessage=new Message(req.body);
    //it contains ConversationId:,senderId,text
    try {
        const savedMessage = await newMessage.save()
        res.status(200).json(savedMessage)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    sendMessage

}
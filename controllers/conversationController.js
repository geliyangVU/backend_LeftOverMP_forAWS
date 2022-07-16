const express = require('express')
const Conversation = require('../models/Conversation')

const createConversation = async (req, res) => {
    try {
        const newConversation = new Conversation({
            members:[req.body.senderId,req.body.receiverId]
        })

        const savedConversation = await newConversation.save();
        res.status(201).json({ message: "conversation created" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}




const getUserConversation = async (req, res) => {
    try {
        const conversation = await Conversation.find({
            members: { $in:[req.params.userId]}
        })
        res.status(200).json(conversation)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    createConversation,getUserConversation

}

const express = require('express')
const Post = require("../models/Post")
const asyncHandler = require('express-async-handler')


const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({ messgae: error.message })
    }
}



const uploadPost = async (req, res) => {   
    const { userId, postId, description, pictureURL } = req.body

    try {
        const post = await Post.create({
            userId, postId, description, pictureURL
    
        })
        res.status(201).json(item);
        } catch (error) {
            res.status(500).json({ messgae: error.message })
        }
}


module.exports = {
    uploadPost,getPost
}

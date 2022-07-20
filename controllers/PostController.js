
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
    const post = new Post(req.body)
    try {
        await post.save();
        res.status(201).json(item);
        } catch (error) {
            res.status(500).json({ messgae: error.message })
        }
}


module.exports = {
    uploadPost,getPost
}

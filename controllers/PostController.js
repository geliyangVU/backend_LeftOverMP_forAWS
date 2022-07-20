
const express = require('express')
const Post = require("../models/Post.js")
const asyncHandler = require('express-async-handler')


const getPost = async (req, res) => {

    //TODO
    //fix error for now able to get post by id
    try {
        const post = await Post.findById(req.body.postid)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({ messgae: error.message })
    }
}



const uploadPost = async (req, res) => {   

    try {
        const { userId, postId, description, pictureURL } = req.body
        const post = await Post.create({
            userId, postId, description, pictureURL
    
        })
        res.status(201).json(post);
        } catch (error) {
            res.status(500).json({ messgae: error.message })
        }
}


module.exports = {
    uploadPost,getPost
}

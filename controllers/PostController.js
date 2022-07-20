
const express = require('express')
const Post = require("../models/Post.js")
const asyncHandler = require('express-async-handler')


const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        // res.status(200).json(post)
        const imageUrl=post.pictureURL
        res.status(200).json({post:post,
            url:post.pictureURL})
        // const returnhtml=`<img src="${imageUrl}" width="500" height="500">${post}`
        // res.send(returnhtml)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


const getAllPost = async (req, res) => {

    try {
        const posts = await Post.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({ messgae: error.message })
    }
}


const uploadPost = async (req, res) => {   

    try {
        // const {postId, description, pictureURL } = req.body
        const post = await Post.create(req.body)
        res.status(201).json(post);
        } catch (error) {
            res.status(500).json({ messgae: error.message })
        }
}


module.exports = {
    uploadPost,getPostById,getAllPost
}


const express = require('express')
const File = require('../models/File')
const asyncHandler = require('express-async-handler')


const uploadPost = asyncHandler(async (req, res) => {
    const { pictureURL } = req.body

    
    const post = await Post.create({
        price, expirationDate, nameOfItem, description, ingredients_allergens
    })

    if (post) {
        res.status(201).json({
            price: post.price,
            expirationDate: post.expirationDate,
            name: post.name,
            description: post.description,
            message: "Post uploaded"
        })

    } else {
        res.status(400)
        throw new Error('Invalid entry')
    }
})


module.exports = {
    uploadPost,
}
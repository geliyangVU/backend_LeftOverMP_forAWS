const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required : true 
    },
    description: {
        type: String,
        max : 500 
    },
    img: {
        type: String,
    },
    interested:{
        type: Array,
        default: []
    }
});

let Post = mongoose.model("Post", PostSchema)

module.exports = Post;
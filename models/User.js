const mongoose = require('mongoose')
const Schema=mongoose.Schema;


const userSchema = new mongoose.Schema({
    username: {
        type : String,
        require: true,
        min:3,
        max:20,
        unique:true
    },
    email:{
        type:String,
        max:50,
        unique:true
    },
    password: {
        type: String,
        required:true,
    },
    creationDate: {type:Date, default:Date.now},
    imageLink:{type:String, default:""}
});

let User=mongoose.model("User", userSchema)

module.exports = User;
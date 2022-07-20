const express = require('express')
const router = express.Router()
const { getAllUsers, getUser, editPassword, deleteUser, loginUser, registerUser, followUser, unfollowUser } = require('../controllers/userController')
// const {createConversation,getUserConversation} = require("../controllers/conversationController")
// const { sendMessage,getUserMessage } = require("../controllers/messageController")
const{uploadPost,getPost } = require("../controllers/postController")


//User Controller
router.get('/users/getAllUsers', getAllUsers)
router.post('/users/register', registerUser)
router.post('/users/login', loginUser)

//get user info by calling this with id as parameter
router.get('/users/getUser/:id', getUser)


//allow User to edit password.  (passing id as parameter)
router.put('/users/editPassword/:id', editPassword)
router.delete('/users/deleteUser', deleteUser)
router.put('/users/:id/follow', followUser)
router.put('/users/:id/unfollow', unfollowUser)


//Post Controller
//ToDo
// // router.post('/post/uploadPost',uploadPost)
router.post('/posts/uploadPost', uploadPost)
router.get('/posts/getPost', getPost)





// //Conversation Controller
// router.post('/conversations/createConversation', createConversation)//tested using postman
// router.get('/conversations/getUserConversation/:id', getUserConversation)//tested using postman



// //Message Controller
// router.post('/messages/sendMessage', sendMessage)//tested using postman
// router.get('/messages/:ConversationId', getUserMessage)//tested using postman


module.exports = router
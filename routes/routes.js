const express = require('express')
const router = express.Router()
const { getAllUsers, getUser, editPassword, deleteUser, loginUser, registerUser, followUser, unfollowUser } = require('../controllers/userController')
const { getAllItems, uploadItem, deleteItem, getItem } = require('../controllers/itemController')

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




// Item Controller
router.get('/items/getAllItems', getAllItems)
router.post('/items/uploadItem', uploadItem)
router.delete('/items/deleteItem', deleteItem)
router.get('/items/getItem', getItem)

module.exports = router
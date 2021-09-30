const express = require('express')
const router = express.Router()
const postController = require('../controllers/post') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/:id', ensureAuth, postController.getPost)

router.post('/createPost', postController.createPost)

router.delete('/deletePost', postController.deletePost)

module.exports = router
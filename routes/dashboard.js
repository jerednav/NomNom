const express = require('express')
const router = express.Router()
const dashboardController = require('../controllers/dashboard') 
const postController = require('../controllers/post')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, dashboardController.getDashboard)

router.get('/post', ensureAuth, postController.getPost)

router.post('/createPost', postController.createPost)

// router.post('/createLog', dashboardController.createLog)

// router.put('/markComplete', todosController.markComplete)

// router.put('/markIncomplete', todosController.markIncomplete)

// router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router;
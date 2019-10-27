const express = require('express')
const router = express.Router()
const userController = require('./../controllers/userController')
const authController = require('./../controllers/authController')

router
    .route('/')
    .get(userController.getAllUsers)

router
    .route('/:id')
    .get(userController.getUser)

router
    .route('/signup')
    .post(authController.signup)
    
module.exports = router;

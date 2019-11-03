const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const authController = require('../controllers/authController')

router
    .route('/')
    .get(userController.getAllUsers)

/**
 * TODO: 
 * create a middleware function to checkif a user 
 * is connected before sending back data
 */
router
    .route('/:id')
    .get(userController.getUser)
    .patch(userController.updateUser)
//

router
    .route('/signup')
    .post(authController.signup)

router
    .route('/login')
    .post(authController.login)
    
module.exports = router;

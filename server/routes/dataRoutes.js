const express = require('express')
const router = express.Router()
const dataController = require('../controllers/dataController')

router
    .route('/:action')
    .get(dataController.importData)

module.exports = router;

const express = require('express')
const router = express.Router()
const dataController = require('../controllers/dataController')

router
    .route('/skills')
    .get(dataController.importSkills)

router
    .route('/update')
    .get(dataController.updateData)

router
    .route('/:action')
    .get(dataController.importData)


module.exports = router;

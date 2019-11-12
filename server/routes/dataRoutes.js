const express = require('express')
const router = express.Router()
const dataController = require('../controllers/dataController')

/**
 * 
 */
router
    .route('/:action')
    .get(dataController.importSkills, dataController.importStudents, dataController.updateStudentSkills)

module.exports = router;

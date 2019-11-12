const router = require('express').Router()
const skillController = require('./../controllers/skillController')

router
    .route('/')
    .get(skillController.getSkills)
    .delete(skillController.deleteSkills)

router
    .route('/:id')
    .get(skillController.getSkill)

module.exports = router

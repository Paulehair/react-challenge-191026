const router = require('express').Router()
const skillController = require('./../controllers/skillController')

router
    .route('/')
    .get(skillController.getSkills)

router
    .route('/:id')
    .get(skillController.getSkill)

module.exports = router

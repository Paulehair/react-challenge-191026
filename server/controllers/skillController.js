const Skill = require('./../models/skillModel')
const catchAsync = require('./../services/catchAsync')

exports.getSkills = catchAsync(async (req, res) => {
    const skills = await Skill.find()
    res.status(200).json({
        status: 'success',
        data: {
            skills
        }
    })
})

exports.getSkill = catchAsync(async (req, res) => {
    const skill = await Skill.findById(req.params.id)
    res.status(200).json({
        status: 'success',
        data: {
            skill
        }
    })
})

exports.deleteSkills = catchAsync(async (req, res) => {
    await Skill.deleteMany()
    res.status(200).json({
        status: 'success'
    })
})

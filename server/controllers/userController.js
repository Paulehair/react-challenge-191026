const User = require('./../models/userModel')
const catchAsync = require('./../services/catchAsync')

exports.getAllUsers = catchAsync(async (req, res) => {
    const users = await User.find()
    res.status(200).json({
        status: 'success',
        data: {
            users
        }
    })
})

exports.getUser = catchAsync(async (req, res) => {
    const user = await User.findById(req.params.id)
    res.status(200).json({
        status: 'success',
        data: {
            user
        }
    })
})

//TODO: Verify that a user is connected in order to edit data
exports.updateUser = catchAsync(async (req, res, next) => {
    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body, {
            new: true,
            runValidators: true
        }
    );

    res.status(200).json({
        status: 'Success',
        data: {
            user: updatedUser
        }
    });
})

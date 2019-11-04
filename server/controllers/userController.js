const User = require('./../models/userModel')
const catchAsync = require('./../services/catchAsync')

//TODO: Verify that a user is connected in order to access students list
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

    return res.status(200).json({
        status: 'success',
        data: {}
    })
})

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

exports.createUser = catchAsync(async (req, res, next) => {
    const newUser = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    });

    res.status(200).json({
        status: 'Success',
        data: {
            user: newUser
        }
    });
})

exports.deleteUser = catchAsync(async (req, res, next) => {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
        return next(new AppError('No user found with that ID'), 404);
    }

    res.status(204).json({
        status: 'Success',
        data: null
    });
})

exports.getAllUsers = (req, res) => {
    return res.status(200).json({
        status: 'success',
        data: {}
    })
}

exports.getUser = (req, res) => {
    return res.status(200).json({
        status: 'success',
        data: {}
    })
}

// const account = require('./authController');

// module.exports = function (app) {
//     app.post('/login', account.login);
// }

exports.getAllUsers = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {}
    })
}

exports.getUser = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {}
    })
}

const account = require('./account/lib');

module.exports = function (app) {
    app.post('/login', account.login);
    app.post('/signup', account.signup);
}

const User = require("../models/userModel");
const jwt = require('jsonwebtoken');
const config = require("../config/config");

const signToken = id => {
    return jwt.sign({
        id
    }, config.JWT_SECRET, {
        expiresIn: config.JWT_EXPIRATION_TIME
    });
};

exports.signup = async (req, res) => {

    try {
        const newUser = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        });
        
        const token = await signToken(newUser._id);
        
        res.status(200).json({
            status: "Succès",
            data: {
                user: newUser
            },
            token
        });
    } catch(err) {
        res.status(500).json({
            status: 'fail',
            error: err
        })
    }
}

exports.login = async (req, res) => {
    const {
        password,
        email
    } = req.body;
    if (!email || !password) {
        //Le cas où l'email ou bien le password ne serait pas soumit ou nul
        return res.status(400).json({
            text: "Requête invalide"
        });
    }
    try {
        // On check si l'utilisateur existe en base
        const findUser = await User.findOne({
            email
        });
        if (!findUser)
            return res.status(401).json({
                text: "L'utilisateur n'existe pas"
            });
        if (!findUser.authenticate(password))
            return res.status(401).json({
                text: "Mot de passe incorrect"
            });
        return res.status(200).json({
            token: findUser.getToken(),
            text: "Authentification réussi"
        });
    } catch (error) {
        return res.status(500).json({
            error
        });
    }
}


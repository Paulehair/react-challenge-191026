const mongoose = require("mongoose");
const passwordHash = require("password-hash");
const jwt = require("jwt-simple");
const config = require("../config/config");

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'A student must have a first name']
    },
    lastName: {
        type: String,
        required: [true, 'A student must have a last name']
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        required: [true, 'A student must have an email address']
    },
    role: {
        type: String,
        required: true,
        enum: [
            'user',
            'admin',
            'superadmin'
        ],
        default: 'user'
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: {
        createdAt: "created_at"
    }
});

userSchema.methods = {
    authenticate: function (password) {
        return passwordHash.verify(password, this.password);
    },
    getToken: function () {
        return jwt.encode(this, config.secret);
    }
};

module.exports = mongoose.model("User", userSchema);

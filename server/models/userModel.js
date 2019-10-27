const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

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

// Password hash function before creating new user entry
userSchema.pre('save', async function (next) {
    // Only run this function if password was either created or modified
    if (!this.isModified('password')) return next();

    // Hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

userSchema.methods = {
    authenticate: async function (submittedPassword, userPassword) {
        const value = await bcrypt.compare(submittedPassword, userPassword)
        console.log(value)
        return await bcrypt.compare(submittedPassword, userPassword);
    }
};

module.exports = mongoose.model("User", userSchema);

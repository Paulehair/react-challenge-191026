const fs = require('fs');
const deburr = require('lodash.deburr');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./../models/userModel');

dotenv.config({
    path: './../../config.env'
});

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

// Get students data from json file
const students = JSON.parse(fs.readFileSync('./data-students.json'))

// Loop over student to generate email and add temporary password 
students.forEach(student => {
    const { firstName, lastName } = student
    student.email = `${deburr(firstName)}.${deburr(lastName.split(' ').join(''))}@hetic.net`.toLowerCase()
    student.password = 'admin'
})


// Connect to DB
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB connection successful'));

// Async function to insert students into Users collection
const importData = async () => {
    try {
        await User.create(students);
        console.log('Data successfully inserted.');
        process.exit();
    } catch (err) {
        console.log(err);
        process.exit();
    }
};

/**
 * Async function to delete students into Users collection
 * /!\ Only use in case of error during data entry /!\
 */ 
const deleteData = async () => {
    try {
        await User.deleteMany();
        console.log('Data successfully deleted.');
    } catch (err) {
        console.log(err);
    }
};

/** 
 * Use appropriate node script argument to proceed with the right action
 * e.g: `node data-import.js --import`
*/
if (process.argv[2] === '--import') {
    importData();
} else if (process.argv[2] === '--delete') {
    deleteData();
};


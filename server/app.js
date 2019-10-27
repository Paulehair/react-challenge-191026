const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

//On définit notre objet express nommé app
const app = express();


//Body Parser
const urlencodedParser = bodyParser.urlencoded({
    extended: true
});
app.use(urlencodedParser);
app.use(bodyParser.json());
app.use(morgan('dev'))

// CORS definition
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// Router import
const userRouter = require('./routes/userRoutes')
app.use("/user", userRouter);

// create new appError if an error is caught during an operation
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404));
});

module.exports = app;

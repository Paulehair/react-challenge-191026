//Définition des modules
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config({
    path: '../config.env'
})
//On définit notre objet express nommé app
const app = express();

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);


//Connexion à la base de donnée
mongoose
  .connect(DB, 
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((e) => {
    console.log("Error while DB connecting");
    console.log(e);
  });

//Body Parser
const urlencodedParser = bodyParser.urlencoded({
    extended: true
});
app.use(urlencodedParser);
app.use(bodyParser.json());

//Définition des CORS
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//Définition du routeur
const router = express.Router();
app.use("/user", router);
require(__dirname + "/controllers/userController")(router);

//Définition et mise en place du port d'écoute
const port = process.env.PORT;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));


// Close server if an error is caught
process.on('unhandledRejection', err => {
    console.error(err.name, err.message);
    server.close(() => process.exit(1));
});

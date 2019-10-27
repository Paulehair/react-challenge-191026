//Définition des modules
const mongoose = require("mongoose")
const dotenv = require('dotenv')

dotenv.config({
    path: '../config.env'
})

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

//Définition et mise en place du port d'écoute
const app = require('./app');
const port = process.env.PORT;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));


// Close server if an error is caught
process.on('unhandledRejection', err => {
    console.error(err.name, err.message);
    server.close(() => process.exit(1));
});

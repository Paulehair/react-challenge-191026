const dotenv = require('dotenv')

dotenv.config({
    path: 'config.env'
})

const port = process.env.PORT

const app = require('./app')

const server = app.listen(port, () => {
    console.log(`App running on port ${port}`);
});



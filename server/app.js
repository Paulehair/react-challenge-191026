const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

const userRoutes = require('./routes/userRoutes')
app.use('/api/users', userRoutes)

module.exports = app

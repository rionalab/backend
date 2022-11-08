const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const connectDB = require('./configs/db')
const { errorHandler } = require('./middlewares/error')

require('dotenv').config()
connectDB()

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')
// *  middleware
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

require('./routes/index.js')(app)

app.use(function (req, res, next) {
   next(createError(404))
})
app.use(errorHandler)

module.exports = app

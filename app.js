var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

const routePrefix = '/api'

// * middleware
const { errorHandler } = require('./middlewares/error')

// * router
var indexRouter = require('./routes/index')
var postsRouter = require('./routes/posts')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use(routePrefix + '/posts', postsRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
   next(createError(404))
})

// error handler
app.use(errorHandler)

module.exports = app

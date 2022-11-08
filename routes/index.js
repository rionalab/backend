const express = require('express')
const postsRouter = require('../routes/posts')

const routePrefix = '/api'

module.exports = (app) => {
   app.use(routePrefix + '/posts', postsRouter)
}

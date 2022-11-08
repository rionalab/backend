const asyncHandler = require('express-async-handler')
const Posts = require('../models/posts')
const m = require('../helpers/mongoose')

const index = asyncHandler(m.handleIndex(Posts))
const show = asyncHandler(m.handleShow(Posts))
const store = asyncHandler(m.handleStore(Posts))
const update = asyncHandler(m.handleUpdate(Posts))
const remove = asyncHandler(m.handleRemove(Posts))

module.exports = {
   index,
   store,
   show,
   update,
   remove,
}

const asyncHandler = require('express-async-handler')

const index = asyncHandler(async (req, res) => {
   res.status(200).json({ message: 'index' })
})

const show = asyncHandler(async (req, res) => {
   res.status(200).json({ message: 'show' })
})

const store = asyncHandler(async (req, res) => {
   if (!req.body.title) {
      res.status(400)
      throw new Error('title is missing.')
   }

   res.status(200).json({ message: 'store' + req.body.title })
})

module.exports = {
   index,
   store,
   show,
}

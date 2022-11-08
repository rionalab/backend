const mongoose = require('mongoose')
const asyncHandler = require('express-async-handler')

const handleIndex = (model) => async (req, res) => {
   const data = await model.find()
   return res.status(200).json(responseSuccess({ data }))
}

const handleShow = (model) => async (req, res) => {
   const { id } = req.params

   const data = await validateId(id, model, res)

   return res.status(200).json(responseSuccess({ data }))
}

const handleStore = (model) => async (req, res) => {
   const { title } = req.body

   if (!title) {
      res.status(400)
      throw new Error(messages.isRequired('title'))
   }

   const data = await model.create({
      title,
   })

   res.status(200).json(responseSuccess({ data }))
}

const handleUpdate = (model) => async (req, res) => {
   const { id } = req.params

   await validateId(id, model, res)

   const data = await model.findByIdAndUpdate(id, req.body, {
      new: true,
   })

   res.status(200).json(responseSuccess({ data }))
}

const handleRemove = (model) => async (req, res) => {
   const { id } = req.params

   const row = await validateId(id, model, res)

   await row.remove()

   res.status(200).json(responseSuccess({ data: id }))
}

const responseSuccess = (data) => ({
   success: true,
   ...data,
})

const validateId = asyncHandler(async (id, model, res) => {
   if (!isValidId(id)) {
      throw new Error(messages.badData)
   }

   const findRow = await model.findById(id)

   if (!findRow) {
      res.status(404)
      throw new Error(messages.notFound)
   }

   return findRow
})

const isValidId = (id) => {
   return mongoose.Types.ObjectId.isValid(id)
}

const messages = {
   badData: 'Bad data.',
   notFound: 'Data not found.',
   isRequired: (name) => `${name} is required.`,
}

module.exports = {
   handleIndex,
   handleShow,
   handleRemove,
   handleUpdate,
   handleStore,
}

const mongoose = require('mongoose')

const postsSchema = mongoose.Schema(
   {
      title: {
         type: String,
         require: [true, 'Title is required.'],
      },
   },
   { timestamps: true }
)

module.exports = mongoose.model('Posts', postsSchema)

const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  food: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    // required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  carbs: {
    type: Number,
    required: true,
  },
  protein: {
    type: Number,
    required: true,
  },
  fat: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Post', PostSchema)

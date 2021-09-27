const mongoose = require('mongoose')

const DashboardSchema = new mongoose.Schema({
  food: {
    type: String,
    required: true,
  },
  date: {
    type: String
    // required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  carbs: {
    type: String,
    required: true,
  },
  protein: {
    type: String,
    required: true,
  },
  fat: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Dashboard', DashboardSchema)

const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    url: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
})

const movies = mongoose.model('Movie', movieSchema)

movies.createIndexes()

module.exports = movies
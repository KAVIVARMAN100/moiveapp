const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  runtime: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  writer: {
    type: String,
    required: true,
  },

  actors: {
    type: String,
    required: true,
  },
  plot: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  idmbRating: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("movie", movieSchema);

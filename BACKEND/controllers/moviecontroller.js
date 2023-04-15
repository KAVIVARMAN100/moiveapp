const mongoose = require("mongoose");

const movie = require("../Models/movieModel");
//GET ALL MOVIES-/api/v1/movies
exports.getMovies = async (req, res, next) => {
  const movies = await movie.find();
  res.status(200).json({
    success: true,
    movies,
  });
};
//New Movies-/api/v1/movie/new
exports.newMovies = async (req, res, next) => {
  const movieNew = await movie.create(req.body);
  res.status(200).json({
    success: true,
    movieNew,
  });
};

//GET MOVIES BT ID-- /api/v1/moive/;id

exports.singleMovie = async (req, res, next) => {
  const singleMovie = await movie.findById(req.params.id);
  res.status(200).json({
    success: true,
    singleMovie,
  });
};
//Update Movies=/api/movie/update
exports.updateMovies = async (req, res, next) => {
  const movieUpdate = await movie.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({
    success: true,
    movieUpdate,
  });
};

exports.deleteMovies = async (req, res, next) => {
  const movieDeleted = await movie.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
    message: "product deleted",
  });
};

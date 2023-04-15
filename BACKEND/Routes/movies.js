const express = require("express");
const {
  getMovies,
  newMovies,
  updateMovies,

  singleMovie,
} = require("../controllers/moviecontroller");
const router = express.Router();

router.route("/movies").get(getMovies);
router.route("/movie/new").post(newMovies);
router.route("/movie/:id").get(singleMovie);
router.route("/movie/:id").put(updateMovies);
module.exports = router;

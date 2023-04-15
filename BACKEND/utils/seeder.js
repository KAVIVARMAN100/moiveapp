const movie = require("../Models/movieModel");

const movies = require("../data/movies.json");
const dotenv = require("dotenv");

const connectDataBase = require("../config/database");

const path = require("path");
dotenv.config({ path: path.join(__dirname, "../config/config.env") });

connectDataBase();

const seedMovies = async () => {
  try {
    await movie.deleteMany();
    console.log("All movies got deleted");
    await movie.insertMany(movies);
    console.log("All movies got added");
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};
seedMovies();

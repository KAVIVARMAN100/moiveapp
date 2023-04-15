const express = require("express");

const app = express();

const movies = require("./Routes/movies");
app.use(express.json());
app.use("/api/v1/", movies);
module.exports = app;

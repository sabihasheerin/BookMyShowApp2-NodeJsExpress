const mongoose = require("mongoose");

//create publications Schema
const MoviesSchema = mongoose.Schema({
    imageurl : String,
    title : String,
    actor: String
});

const MoviesModel = mongoose.model("Movies", MoviesSchema);
 module.exports = MoviesModel;
  
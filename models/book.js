const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  //title: { type: String, required: true },
  authors: { type: String, required: true },
  //synopsis: String,
  //date: { type: Date, default: Date.now },
  description: {type: String, default: ""},
  image: {type: String, default: "www.cnn.com"},
  link: {type: String, default: ""},
  title: { type: String, required: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

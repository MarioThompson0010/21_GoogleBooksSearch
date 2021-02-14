const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  authors: { type: String, required: true },
  description: {type: String, default: ""},
  image: {type: String, default: "www.cnn.com"},
  link: {type: String, default: ""},
  title: { type: String, required: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

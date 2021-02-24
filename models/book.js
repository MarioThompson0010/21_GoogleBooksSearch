const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  authors: { type: String, required: false },
  description: {type: String, default: ""},
  image: {type: String, default: "www.cnn.com"},
  link: {type: String, default: ""},
  title: { type: String, required: false }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

import axios from "axios";
// AIzaSyC7S5uOXG1DVFHgYJS40Gt3Tx1eI7SVBl0 api key
//https://www.googleapis.com/books/v1/volumes?q=quilting
// key=yourAPIKey
//https://www.googleapis.com/books/v1/volumes?q=search+terms
// import axios from "axios";
//https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
//+inauthor:keyes&key=yourAPIKey
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="; //?key=AIzaSyC7S5uOXG1DVFHgYJS40Gt3Tx1eI7SVBl0";
const rest = "";

export default {
    searchBook: function(searchTerm) {
        return axios.get(BASEURL + searchTerm + rest);
    },
    // Gets all books
    getBooks: function() {
      return axios.get("/api/books");
    },
    // Gets the book with the given id
    getBook: function(id) {
      return axios.get("/api/books/" + id);
    },
    // Deletes the book with the given id
    deleteBook: function(id) {
      return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function(bookData) {
      return axios.post("/api/books", bookData);
    }
  };
  
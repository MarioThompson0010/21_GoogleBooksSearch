import React, { useState, useEffect } from "react";
import LookupBtn from "../components/LookupBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link as a } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Search() {
    // Setting our component's initial state
    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({})

    // Load all books and store them with setBooks
    useEffect(() => {
        // loadBooks()
    }, [])

    // Loads all books and sets them to books
    function loadBooks() {
        API.getBooks()
            .then(res =>
                setBooks(res.data)
            )
            .catch(err => console.log(err));
    };

    // Deletes a book from the database with a given id, then reloads books from the db
    function deleteBook(id) {
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    }

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title && formObject.author) {
            API.saveBook({
                title: formObject.title,
                author: formObject.author
                //synopsis: formObject.synopsis
            })
                .then(res => loadBooks())
                .catch(err => console.log(err));
        }
    };

    function handleFormSearch(event) {
        event.preventDefault();
        //if (formObject.title && formObject.author) {
        API.searchBook(formObject.title)
            // API.saveBook({
            //     title: formObject.title,
            //     author: formObject.author
            //     //synopsis: formObject.synopsis
            // })
            .then(res => {
                console.log(res);
                console.log(res.items);
                setBooks(res.data.items);
            })
            .catch(err => console.log(err));
        //}
    };

    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <Jumbotron>
                        <h1>Google book lookup</h1>
                    </Jumbotron>
                    <form>
                        <Input
                            onChange={handleInputChange}
                            name="title"
                            placeholder="Title (required)"
                        />
                        {/* <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Author (required)"
              /> */}
                        <TextArea
                            //onChange={handleInputChange}
                            name="synopsis"
                            placeholder="Synopsis (Optional)"
                        />
                        <FormBtn
                            // disabled={!(formObject.author && formObject.title)}
                            onClick={handleFormSearch}
                        >
                            Submit Book
                         </FormBtn>
                    </form>
                </Col>
                <Col size="md-6 sm-12">
                    <Jumbotron>
                        <h1>Books On My List</h1>
                    </Jumbotron>
                    {books.length ? (
                        <List>
                            {books.map(book => (
                                <ListItem key={book.id} href={book.volumeInfo.infoLink} target="_blank">

                                    <strong>

                                        <a href={book.volumeInfo.infoLink} target="_blank">
                                            {book.volumeInfo.title} by {book.volumeInfo.authors[0]}
                                        </a>
                                    </strong>


                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                    {/* <ListItem key={books.id}>
                        <strong>
                            {books.title} by {books.author}
                        </strong>
                    </ListItem> */}
                </Col>
            </Row>
        </Container>
    );
}


export default Search;

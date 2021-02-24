import React, { useEffect, useState, createContext } from "react";
import DeleteBtn from "../components/DeleteBtn";
import { Link, useParams, useLocation } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import API from "../utils/API";


function SavedFunc() {

    const location = useLocation(); // this is where you would get passed parameters
    // When this component mounts, grab the book with the _id of props.match.params.id
    // e.g. localhost:3000/books/599dcb67f0f16317844583fc
    const [book, setBook] = useState([]);

    const { id } = useParams(); // not currently being used, but good to keep in mind
    useEffect(() => {
        //console.log(location.state.detail); // this is how you would get data passed
        API.getBooks()
            .then(res => setBook(res.data))
            .catch(err => console.log(err));
    }, [])


    // Deletes a book from the database with a given id, then reloads books from the db
    function deleteBook(id) {
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    }

    // Loads all books and sets them to books
    const loadBooks = () => {
        API.getBooks()
            .then(res =>
                setBook(res.data)
            )
            .catch(err => console.log(err));
    }

    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                </Col>
            </Row>
            <Row>
                <Col size="md-10 md-offset-1">
                    <List>
                        {book.map(bookie => (
                            <ListItem key={bookie._id}>
                                <strong>
                                    <a href={bookie.link} target="_blank">
                                        {bookie.title} by {bookie.authors}
                                    </a>
                                </strong>
                                <DeleteBtn onClick={() => deleteBook(bookie._id)} />
                            </ListItem>
                        ))}
                    </List>
                </Col>
            </Row>
            <Row>
                <Col size="md-2">
                    <Link to="/">← Back to Titles</Link>
                </Col>
            </Row>
        </Container>
    );
}
export default SavedFunc;




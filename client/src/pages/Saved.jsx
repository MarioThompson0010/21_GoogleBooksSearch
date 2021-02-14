import React, { useEffect, useState } from "react";
import DeleteBtn from "../components/DeleteBtn";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
//import Jumbotron from "../components/Jumbotron";
import { List, ListItem } from "../components/List";
import API from "../utils/API";

function Saved(props) {
    const [book, setBook] = useState([])

    // When this component mounts, grab the book with the _id of props.match.params.id
    // e.g. localhost:3000/books/599dcb67f0f16317844583fc
    const { id } = useParams();
    useEffect(() => {
        API.getBooks()
            .then(res => setBook(res.data))
            .catch(err => console.log(err));
    }, []);

    // Deletes a book from the database with a given id, then reloads books from the db
    function deleteBook(id) {
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    }

    // Loads all books and sets them to books
    function loadBooks() {
        API.getBooks()
            .then(res =>

                setBook(res.data)
            )
            .catch(err => console.log(err));
    };


    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    {/* <Jumbotron>
              <h1>
                {book.title} by {book.author}
              </h1>
            </Jumbotron> */}
                </Col>
            </Row>
            <Row>
                <Col size="md-10 md-offset-1">

                    {/* {book.length ? ( */}
                    <List>
                        {book.map(bookie => (
                            <ListItem key={bookie._id}>
                                {/* <Link to={"/books/" + bookie._id}> */}
                                <strong>

                                    <a href={bookie.link} target="_blank">
                                        {bookie.title} by {bookie.authors}
                                    </a>

                                </strong>
                                {/* </Link> */}
                                {/* <LookupBtn onClick={() => deleteBook(bookie._id)} /> */}
                                <DeleteBtn onClick={() => deleteBook(bookie._id)} />
                                {/* <LookupBtn onClick={() => deleteBook(bookie.id)} /> */}
                            </ListItem>
                        ))}
                    </List>
                    {/* ) : (
                             <h3>No Results to Display</h3>
                         )} */}


                    {/* <article>
              <h1>Synopsis</h1>
              <p>
                {book.synopsis}
              </p>
            </article> */}
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


export default Saved;

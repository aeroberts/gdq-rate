import "./styles/App.css";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import { useQuery } from "@apollo/client";

import ALL_RUNS from "./constants/queries";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap'

const client = new ApolloClient({
    uri: "https://sgdq.shaneschulte.com/",
    cache: new InMemoryCache()
});

export default function App() {
    return (
        <Router>
            <ApolloProvider client={client}>
                <div>
                    <Navbar bg="light" expand="sm">
                        <Navbar.Brand href="#home">GDQ-Rate</Navbar.Brand>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <LinkContainer to="/" className="align-self-center">
                                    <Nav.Link>Home</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/runs"  className="align-self-center">
                                    <Nav.Link>Runs</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/about" className="align-self-center">
                                    <Nav.Link>Users</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Text className="justify-content-end">
                            <img className="avatar" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p100x100/17022162_10212153272056692_6227002567242293167_n.jpg?_nc_cat=102&amp;_nc_sid=7206a8&amp;_nc_ohc=HUL81dr_c1YAX8NiM-z&amp;_nc_ht=scontent-sjc3-1.xx&amp;_nc_tp=6&amp;oh=b8cc13b978a41cdee1c4c9c4382fe52b&amp;oe=5F443A06"></img>
                        </Navbar.Text>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </Navbar>


                    <div className="main-body container">
                        <Switch>
                            <Route path="/runs">
                                <Runs />
                            </Route>
                            <Route path="/users">
                                <Users />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </ApolloProvider>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

function Runs() {
    const { loading, error, data } = useQuery(ALL_RUNS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return <h2>Alex</h2>;
}

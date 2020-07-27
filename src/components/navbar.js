import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { AuthContext } from "../contexts/gdq-rate-auth";

export default function GDQRNavBar() {
    const { userData } = React.useContext(AuthContext);
    return (
        <Navbar bg="light" expand="sm" className="navigation-bar">
            <LinkContainer to="/" className="align-self-center">
                <Navbar.Brand href="#home">GDQ-Rate</Navbar.Brand>
            </LinkContainer>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/runs" className="align-self-center">
                        <Nav.Link>All Runs</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
            {userData ? (
                <Navbar.Text className="justify-content-end">
                    <LinkContainer to="/profile" className="align-self-center">
                        <Nav.Link>
                            <img
                                className="avatar"
                                alt="Profile Avatar"
                                src={
                                    userData.avatar_url ||
                                    "https://avatars2.githubusercontent.com/u/8890027?s=460&u=82f8be7c74d22442ac93b0125649e591f8944032&v=4"
                                }
                            ></img>
                        </Nav.Link>
                    </LinkContainer>
                </Navbar.Text>
            ) : (
                <>
                    <Navbar.Text>
                        <LinkContainer
                            to="/login"
                            className="align-self-center"
                        >
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                    </Navbar.Text>
                    <Navbar.Text>
                        <LinkContainer
                            to="/register"
                            className="align-self-center"
                        >
                            <Nav.Link>Register</Nav.Link>
                        </LinkContainer>
                    </Navbar.Text>
                </>
            )}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
    );
}

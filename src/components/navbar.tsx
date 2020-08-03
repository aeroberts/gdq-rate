import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { AuthContext } from "../contexts/gdq-rate-auth";
import { Avatar } from "./avatar";

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
              <Avatar
                uri={userData.avatar_url}
                name={userData.display_name}
                size={40}
              />
            </Nav.Link>
          </LinkContainer>
        </Navbar.Text>
      ) : (
        <>
          <Navbar.Text>
            <LinkContainer to="/login" className="align-self-center">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </Navbar.Text>
          <Navbar.Text>
            <LinkContainer to="/register" className="align-self-center">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
          </Navbar.Text>
        </>
      )}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
  );
}

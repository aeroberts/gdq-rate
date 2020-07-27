import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap'

export default function GDQRNavBar() {
    return (
        <Navbar bg="light" expand="sm">
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
            <Navbar.Text className="justify-content-end">
                <LinkContainer to="/profile" className="align-self-center">
                    <Nav.Link>
                        <img className="avatar" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p100x100/17022162_10212153272056692_6227002567242293167_n.jpg?_nc_cat=102&amp;_nc_sid=7206a8&amp;_nc_ohc=HUL81dr_c1YAX8NiM-z&amp;_nc_ht=scontent-sjc3-1.xx&amp;_nc_tp=6&amp;oh=b8cc13b978a41cdee1c4c9c4382fe52b&amp;oe=5F443A06"></img>
                    </Nav.Link>
                </LinkContainer>
            </Navbar.Text>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
    );
}
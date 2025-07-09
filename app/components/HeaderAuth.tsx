'use client'
import { useState } from "react";
import { Button, Nav, Container, Navbar, NavDropdown, Form, InputGroup  } from "react-bootstrap";

import { BiSearch, BiSearchAlt2, BiUser } from "react-icons/bi";

import { FaTimes } from "react-icons/fa";

const HeaderAuth = () => {


  const [formSearchOpen, setFormSearchOpen] = useState(false);


  return (
    <>
        <Navbar expand="lg" bg="primary" className="navbar-banner">
            <Container className="container-main">
                <Navbar.Brand href="#home" className="text-light px-1">Undernews.</Navbar.Brand>
            </Container>
        </Navbar>

    </>
  )
}

export default HeaderAuth
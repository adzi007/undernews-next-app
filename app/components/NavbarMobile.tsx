'use client'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BiChevronRight, BiMenu, BiUser } from 'react-icons/bi';
import { Image } from 'react-bootstrap';

import ListGroup from 'react-bootstrap/ListGroup';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';

function NavbarMobile() {

    const expand = 'md'

    const [open, setOpen] = useState(false);

    return (
        <>
            <Navbar key={expand} expand={expand} className="bg-primary mb-3 navbar-mobile">
                <Container fluid>
                    <Navbar.Brand href="#" className='text-light'>Undernews.</Navbar.Brand>
                    
                        {/* <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} /> */}

                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} >
                            <BiMenu />
                        </Navbar.Toggle>
                        
                        <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="start">
                        
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Undernews</Offcanvas.Title>
                            </Offcanvas.Header>

                            <Offcanvas.Body className='px-0'>
                                {/* <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">Home</Nav.Link>
                                    <Nav.Link href="#action2">Link</Nav.Link>
                                </Nav> */}

                                <div className='d-inline-flex mb-3 w-100 px-3'>
                                    {/* <div>
                                        <Image src='assets/profile_user.jpg' alt='' width={70} className='rounded-circle' />
                                    </div> */}
                                    {/* <div className='ms-3'>
                                        <h5 className='mb-1 fs-5'>John Doe</h5>
                                        <p className='mb-1 fs-6'>johndoe2023@gmail.com</p>
                                        <a href="" className='text-decoration-none'>Edit profile</a>
                                    </div> */}

                                    <div className='drawer-user-icon'>
                                        <BiUser />
                                    </div>

                                    <div className='ms-3'>
                                        <h5 className='mb-1 fs-5'>Hello User</h5>
                                        <a href="" className='text-decoration-none text-primary'>Login</a> <a href="" className='text-decoration-none text-primary'>Register</a>
                                    </div>
                                
                                </div>
                            
                                <ListGroup>
                                    <ListGroup.Item><a href='#' className='d-block w-100'>News </a></ListGroup.Item>
                                    <ListGroup.Item>
                                        <span className='d-flex w-100 align-items-center justify-content-between' onClick={() => setOpen(!open)}>
                                            <span>Economy</span> 
                                            <span className='fs-5'><BiChevronRight /></span> 
                                        </span>

                                        <Collapse in={open}>
                                            <div id="example-collapse-text">
                                            <ul className='drawer-sub-menu'>
                                                <li><a href='#'>sub menu 1</a></li>
                                                <li><a href='#'>sub menu 2</a></li>
                                                <li><a href='#'>sub menu 3</a></li>
                                                <li><a href='#'>sub menu 4</a></li>
                                            </ul>
                                            </div>
                                        </Collapse>

                                    </ListGroup.Item>
                                    <ListGroup.Item><a href='#' className='d-block w-100'>Education</a></ListGroup.Item>
                                    <ListGroup.Item><a href='#' className='d-block w-100'>Social & Politic </a></ListGroup.Item>
                                    <ListGroup.Item><a href='#' className='d-block w-100'>Entertaiment</a></ListGroup.Item>
                                    <ListGroup.Item><a href='#' className='d-block w-100'>Sport</a></ListGroup.Item>
                                </ListGroup>
                              
                            
                            </Offcanvas.Body>

                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

        </>
    );
}

export default NavbarMobile;
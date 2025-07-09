'use client'
import { useEffect, useState } from "react";
import { Button, Nav, Container, Navbar, NavDropdown, Form  } from "react-bootstrap";
import { BiSearch, BiUser } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";

import useWindowDimensions from "./useWindowDimensions";
import NavbarMobile from "./NavbarMobile";

import { signOut, useSession } from "next-auth/react";

const Header = () => {

  const [formSearchOpen, setFormSearchOpen] = useState(false);

  const { width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(false)

  const { data: session } = useSession();

 

  useEffect(() => {

      // const data = width?.toString()
      
      if (width !== undefined && width < 768) {
          setIsMobile(true)
      }

  },[width, isMobile])


  const logOut = () => {
    console.log("logout process");
    signOut()
  }


  return (
    <>

    <Nav className="top-nav bg-dark">

        <Container className="d-inline-flex px-0 container-main">
          <Nav.Item>
            <Nav.Link href="/home" className="text-light">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" className="text-light">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" className="text-light">Contact</Nav.Link>
          </Nav.Item>
          <Nav.Item>
              <Nav.Link eventKey="link-3" className="text-light">Terms of service</Nav.Link>
          </Nav.Item>

          { session && session.user? 
            
          
            <NavDropdown title={ <span> <BiUser /> { session.user?.name }</span> } id="nav-dropdown0" className="ms-auto user-menu">
              <NavDropdown.Item eventKey="4.1">Profile</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2" onClick={logOut}>Logout</NavDropdown.Item>
            </NavDropdown> 
          :
            <Nav.Item className="ms-auto">
                <Nav.Link eventKey="link-4" href="/login" className="text-light">Sign In</Nav.Link>
            </Nav.Item>
          
          }

        </Container>
       
     
    </Nav>

    <Navbar expand="lg" bg="primary" className="navbar-banner">
      <Container className="container-main">
        <Navbar.Brand href="/" className="text-light px-1">Undernews.</Navbar.Brand>

      </Container>
    </Navbar>

    <Nav activeKey="/home" className="top-nav border-bottom" >
        <Container className="d-inline-flex px-0 container-main">

          <Nav.Item>
            <Nav.Link href="/home" className="text-dark">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about" eventKey="link-1" className="text-dark">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact" eventKey="link-2" className="text-dark">Contact</Nav.Link>
          </Nav.Item>
          <Nav.Item>
              <Nav.Link eventKey="link-3" className="text-dark">Terms of service</Nav.Link>
          </Nav.Item>

          <NavDropdown title="Dropdown" id="nav-dropdown" className="text-dark">
            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>

          <Nav.Item>
              <Nav.Link eventKey="link-4" className="text-dark">Terms of service</Nav.Link>
          </Nav.Item>

          <NavDropdown title="Dropdown" id="nav-dropdown2" className="">
            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>

          { formSearchOpen && 
          
            <Form className="d-flex ms-auto">
              <Button variant="" className="btnicon-search-prepend"><BiSearch /></Button>
              <Form.Control
                type="search"
                placeholder="Search"
                className="form-search px-2"
                aria-label="Search"
                autoFocus
              />
              <Button variant="" className="btnicon-search-prepend" onClick={() => setFormSearchOpen(false)}><FaTimes /></Button>
            </Form>  
          }

          { !formSearchOpen && 
            <Nav.Item className="search-btn ms-auto">
              <Nav.Link eventKey="link-4" className="text-dark btn-search" onClick={() => setFormSearchOpen(true)}> <BiSearch /> Search</Nav.Link>
            </Nav.Item>   
          }

          {/* <Nav.Item className="search-btn ms-auto">
              <Nav.Link eventKey="link-4" className="text-dark btn-search" onClick={openSearchForm}> <BiSearch /> Search</Nav.Link>
          </Nav.Item> */}


        </Container>
       
     
    </Nav>

    <NavbarMobile />
    </>
  )
}

export default Header
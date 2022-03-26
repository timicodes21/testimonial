import React from 'react'
import { Container, Navbar, Nav, Image } from 'react-bootstrap'
import { GiHamburgerMenu } from 'react-icons/gi';
import Brand from '../assets/brand.png'
const Navigbar = () => {
  return (
    <div className="border-bottom">
      <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
        <Container>
          <Navbar.Brand href=""><Image src={Brand} fluid /></Navbar.Brand>
          <Navbar.Toggle className="bg-dark text-white" aria-controls="responsive-navbar-nav"><GiHamburgerMenu /></Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav className="pt-md-2 pb-md-1">
              <Nav.Link><p className="font-13 text-black roboto p-md-2 font-400">ABOUT US</p></Nav.Link>
              <Nav.Link><p className="font-13 text-black roboto p-md-2 font-400">STORIES</p></Nav.Link>
              <Nav.Link><p className="font-13 text-black roboto p-md-2 font-400">CONTACT</p></Nav.Link>
              <Nav.Link><p className="font-13 text-black roboto p-md-2 font-400">LOGIN</p></Nav.Link>
              <Nav.Link><button className="font-13 rounded roboto p-md-2 text-white signup-button p-2 bg-orange text-black font-500">SIGN UP</button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigbar
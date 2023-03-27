import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate()
  const handleSignOut = () =>{
    signOut(auth);
    navigate('/login')
  }
    return (
      <>
      <div>
      <br />
      </div>
      <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img height={40} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="home#services">Services</Nav.Link>
            <Nav.Link href="home#expert">Expert</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
          {/* <Nav.Link as={Link} to="/about">About</Nav.Link> */}
          <div className="user-name mx-auto mt-lg-2">
          <p className='text-white text-center me-1'>{user?.email}</p>
          </div>
         {
          user ?
          <button onClick={handleSignOut} className='btn btn-link text-white text-decoration-none mb-2 rounded'>Sign Out</button>
          :
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    );
};

export default Header;
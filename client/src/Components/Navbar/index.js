import React from "react";
import { Container, Nav, Navbar as RNavbar } from 'react-bootstrap';

// import Auth from '../../utils/auth';

function Navbar(props) {
    return (
        <RNavbar bg='dark' variant='dark' expand='lg'>
        <Container fluid>
          <RNavbar.Brand>
            Tour of Rocks and Ropes
          </RNavbar.Brand>
          <RNavbar.Toggle aria-controls='navbar' />
          <RNavbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
              <Nav.Link href="/">
                Home
              </Nav.Link>
              <Nav.Link href="/upstairs">
                Upstairs
              </Nav.Link>
              <Nav.Link href="/weights">
                Weights
              </Nav.Link>
              {/* if user is logged in show saved books and logout */}
              {/* {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/calendar'>
                    See Your Exercises
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
              )} */}
            </Nav>
          </RNavbar.Collapse>
        </Container>
      </RNavbar>
    )
}

export default Navbar;

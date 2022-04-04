import React from "react";
// import {Nav} from 'react-bootstrap';
// import Auth from '../../utils/auth';

function Navbar(props) {
    return (
        <nav>
            <h1>
                Rocks and Ropes
            </h1>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Weights</li>
                    <li>Upstairs</li>
                    <li>Login</li>
                    {/* {Auth.loggedIn() ? (
                        <>
                        <Nav.Link as={Link} to='/calendar'>
                            Calendar
                        </Nav.Link>
                        <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                        </>
                    ) : (
                        <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
                    )} */}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;

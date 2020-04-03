import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { IoIosList} from 'react-icons/io';

const NavbarMain = ({ title, icon }) => {

    return (
        <Fragment>

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                {/* <h1>
                    <i className="contract"/>
                </h1> */}
                <IoIosList size='30px' style={{ marginRight: '10px' }}/>
                <Navbar.Brand href="#home">{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="ml-auto">
                        <Nav.Link ><Link to='/'>Home</Link></Nav.Link>
                        <Nav.Link>Login</Nav.Link>
                        <Nav.Link >Register</Nav.Link>
                        <Nav.Link ><Link to='/about'>About Us</Link></Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </Fragment>

    )
}

NavbarMain.propTypes = {

    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
}

NavbarMain.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fas fa-file-contract'
}

export default NavbarMain;
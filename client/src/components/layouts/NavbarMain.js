import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink, Link, Route, Redirect } from 'react-router-dom';
import { IoIosList } from 'react-icons/io';

const NavbarMain = ({ title, icon }) => {


    const homeRoute = false;
    const aboutRoute = false;

    // const goOnHomePage = () => {

    //     homeRoute = true;
    // }

    // const redirectToHome = () => {
    //     this.homeRoute = true;
    // }

    return (

        < Fragment >

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                {/* <h1>
                    <i className="contract"/>
                </h1> */}
                <IoIosList size='30px' style={{ marginRight: '10px' }} />
                <Navbar.Brand >{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="ml-auto">
                        <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                        <Nav.Link ><Link to='/about'>About Us</Link></Nav.Link>
                        <Nav.Link><Link to='/login'>Login</Link></Nav.Link>
                        <Nav.Link ><Link to='/register'>Register</Link></Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </Fragment >

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
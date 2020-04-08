import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { IoIosList } from 'react-icons/io';
import { FiLogOut } from "react-icons/fi";

import AuthContext from '../../context/auth/authContext';

const NavbarMain = ({ title, icon }) => {

    const authContext = useContext(AuthContext);
    const { isAuthenticated, logoutUser, user } = authContext;

    const logout = () => {
        logoutUser();
    }

    const goHome = () => {

        // return props.history.push('/');
    }

    const authLinks = (
        <Fragment>
            <Nav.Link><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link><Link to='/about'>About</Link></Nav.Link>
            <Nav.Link>{user && user.name + ' '}<FiLogOut size='25px' title='Logout' onClick={logout} style={{ marginRight: '10px' }} /></Nav.Link>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            {/* <Nav.Link><Link to='/'>Home</Link></Nav.Link> */}
            {/* <Nav.Link onClick={goHome}>Home</Nav.Link>
            <Nav.Link><Link to='/about'>About</Link></Nav.Link> */}
            <Nav.Link><Link to='/login'>Login</Link></Nav.Link>
            <Nav.Link ><Link to='/register'>Register</Link></Nav.Link>
        </Fragment>
    );




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
                        {/* <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                        <Nav.Link ><Link to='/about'>About Us</Link></Nav.Link> */}

                        {isAuthenticated ? authLinks : guestLinks}

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
import React, { Fragment, useEffect, useContext } from 'react'
import Contacts from '../contactPages/Contacts';
import ContactForm from '../contactPages/ContactForm';
import ContactSearch from '../contactPages/ContactSearch';
import AuthContext from '../../context/auth/authContext';

import { Row, Container } from 'react-bootstrap';

const Home = () => {

    const authContext = useContext(AuthContext);
    const { loadUser } = authContext;

    useEffect(() => {
        loadUser();
        // eslint-disable-next-line
    }, []);

    return (
        <Container className="col">
            <div >
                <Row>
                    <div className="col-md-12">
                        <ContactSearch />
                    </div>
                </Row>
                <Row>
                    <div className="col-md-6">
                        <ContactForm />
                    </div>
                    <div className="col-md-6">
                        <Contacts />
                    </div>
                </Row>
            </div>
        </Container>
    )
}

export default Home;
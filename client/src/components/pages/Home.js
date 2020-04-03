import React, { Fragment } from 'react'
import Contacts from '../contactPages/Contacts';
import ContactForm from '../contactPages/ContactForm';
import ContactSearch from '../contactPages/ContactSearch';

import { Row, Container } from 'react-bootstrap';

const Home = () => {
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
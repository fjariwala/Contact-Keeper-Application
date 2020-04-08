import React, { Fragment, useEffect, useContext } from 'react'
import { Row, Container, Col } from 'react-bootstrap';

import Contacts from '../contactPages/Contacts';
import ContactForm from '../contactPages/ContactForm';
import ContactSearch from '../contactPages/ContactSearch';
import AuthContext from '../../context/auth/authContext';
import SpinnerFile from '../layouts/SpinnerFile';

const Home = () => {

    const authContext = useContext(AuthContext);
    const { loadUser, loading } = authContext;

    useEffect(() => {
        loadUser();
        //getContacts();
        // eslint-disable-next-line
    }, []);

    return (

        <Fragment>
            {
                loading ?
                    <Container fluid="md">
                        <Row className="mh-100" className="justify-content-md-center">
                            <Col md="auto"><SpinnerFile /></Col>
                        </Row>

                    </Container>
                    :
                    <Fragment>
                        < Container className="col" >
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
                        </Container >
                        <div className="col-sm">
                            <footer className="footer">
                                <div className="col-sm">
                                    <a href="#!"></a>
                                    <span>&copy; 2020 Contact-Keeper.</span>
                                </div>
                                <div className="col-sm">
                                    <span>Developed by</span>
                                    <a href="https://www.linkedin.com/in/fenil-jariwala-8b4557154/"> Fenil Jariwala</a>
                                </div>
                            </footer>
                        </div>
                    </Fragment>

            }

        </Fragment>

    )
}

export default Home;
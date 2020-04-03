import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
import { Form, Container, Row, Button, Col } from 'react-bootstrap';

const ContactSearch = () => {

    const contactContext = useContext(ContactContext);

    const text = useRef('');

    const { searchContact, clearSearch, filtered } = contactContext;

    useEffect(() => {

        if (filtered === null) {

            text.current.value = '';
        }
    });

    const onSearch = e => {

        e.preventDefault();

        if (text.current.value !== '') {
            searchContact(e.target.value);
        }
        else {
            clearSearch();
        }

    };

    return (
        <div>
            <Container >

                <Form>
                    <Row className='col'>
                        <Col className='col-md-8'>
                            <Form.Group controlId="formBasicSearch">

                                <Form.Label>Search</Form.Label>
                                <Form.Control ref={text} onChange={onSearch} type="text" placeholder="Search" />

                            </Form.Group>
                            {/* <Button variant="success" onChange={onSearch}>Search</Button> */}
                        </Col>

                    </Row>
                </Form>

            </Container>
        </div>
    )
}

export default ContactSearch;
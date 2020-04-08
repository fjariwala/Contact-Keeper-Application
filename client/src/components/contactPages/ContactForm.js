import React, { useState, Fragment, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

import { Form, Container, Row, Button, Col, Badge } from 'react-bootstrap';

const ContactForm = () => {

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });

    const contactContext = useContext(ContactContext);

    const { current, clearContact, addContact, updateContact } = contactContext;

    useEffect(() => {

        if (current !== null) {
            setContact(current);
        }
        else {
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal'
            })
        }
    }, [contactContext, current]);

    const { name, email, phone, type } = contact;

    const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        addContact(contact);
        /**
         * Setting form to default when the data is submitted
         */
        clearContact();
    };

    const onUpdate = e => {
        e.preventDefault();

        updateContact(contact);
        /**
        * Setting form to default when the data is submitted
        */
        setContact({
            name: '',
            email: '',
            phone: '',
            type: 'personal'
        });
        /**
         * Setting form to default when the data is submitted
         */
        clearContact();
    }
    return (
        <Fragment>

            <Container >

                <Row >

                    <Col >
                        <br />
                        <h3>
                            {current ? <Badge variant="secondary" >Update Contact</Badge>
                                : <Badge variant="secondary" >Add Contact</Badge>}

                        </h3>

                        {/* <Col>1 of 1</Col> */}
                        <Form >

                            <Form.Group controlId="formGroupName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text"
                                    placeholder="Enter Name"
                                    name='name'
                                    value={name}
                                    onChange={onChange} />
                            </Form.Group>

                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email"
                                    placeholder="Enter email"
                                    name='email'
                                    value={email}
                                    onChange={onChange} />
                            </Form.Group>

                            <Form.Group controlId="formGroupPhoneNo">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="tel"
                                    placeholder="Phone Number"
                                    name='phone'
                                    value={phone}
                                    onChange={onChange} />
                            </Form.Group>

                            <Form.Check
                                type='radio'
                                name='type'
                                value='personal'

                                label='Personal'
                                onChange={onChange}
                            />
                            <Form.Check
                                type='radio'
                                name='type'
                                value='professional'

                                label='Professional'
                                onChange={onChange}
                            />
                            <br />
                            {current ?
                                <Button variant="outline-primary" size="lg" block onClick={onUpdate}>Update</Button>
                                : <Button variant="outline-primary" size="lg" block onClick={onSubmit}>Submit</Button>}
                            {current ?
                                <Button variant="light" size="lg" block onClick={() => clearContact()}>Clear</Button>
                                : ''}
                        </Form>
                    </Col>
                </Row>
            </Container>

        </Fragment>
    )
}

export default ContactForm;
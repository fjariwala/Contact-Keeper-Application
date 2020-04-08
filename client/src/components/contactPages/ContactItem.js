import React, { useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';

import { Card, Badge, Button, Container, Row } from 'react-bootstrap';
import { IoIosMailOpen } from "react-icons/io";
import { FaPhoneVolume } from 'react-icons/fa';

const ContactItem = ({ contact }) => {

    const { _id, name, email, phone, type } = contact;

    const contactContext = useContext(ContactContext);
    const { deleteContact, clearContact, editContact, updateContact } = contactContext;

    const onDelete = e => {
        e.preventDefault();

        deleteContact(_id);
        clearContact();
    }

    const onUpdate = e => {
        e.preventDefault();

        editContact(contact);
        //updateContact(contact);
    }

    return (
        <Container className='col'>

            <Row >

                <Card className='col-md-8'>
                    <Card.Body>
                        <Card.Title>{name.charAt(0).toUpperCase() + name.slice(1)}</Card.Title>

                        <Card.Subtitle className="mb-3 text-muted">
                            {
                                type === 'personal' ?
                                    <Badge variant="primary">Personal</Badge> :
                                    <Badge variant="success">Professional</Badge>
                            }
                        </Card.Subtitle>

                        {email && (

                            <p><IoIosMailOpen /> {email}</p>

                        )}
                        {phone && (

                            <p><FaPhoneVolume /> {phone}</p>

                        )}

                        <Card.Link ><Button variant="dark" onClick={onUpdate}>Update</Button></Card.Link>
                        <Card.Link ><Button variant="danger" onClick={onDelete}>Delete</Button></Card.Link>

                    </Card.Body>
                </Card >
            </Row>
        </Container>

    )
}

export default ContactItem;
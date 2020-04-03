import React, { Fragment, useContext, useState } from 'react'
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

import { Badge } from 'react-bootstrap';

const Contacts = () => {

    //const [contactAvailability, setAvailability] = useState(0);

    const contactContext = useContext(ContactContext);

    const { contacts, filtered } = contactContext;

    if (contacts.length === 0) {
        return <h4>Please add contacts</h4>;
    }

    return (

        <Fragment>
            {filtered ?

                <h3><Badge variant="secondary" >Searched Contacts</Badge></h3>

                :
                <h3><Badge variant="secondary" >Contact Details</Badge></h3>

            }

            {
                filtered ?
                    filtered.map(contact => (
                        <ContactItem key={contact.id} contact={contact} />
                    ))
                    :
                    contacts.map(contact => (
                        <ContactItem key={contact.id} contact={contact} />
                    ))
            }


        </Fragment>

    )
}

export default Contacts;
import React, { Fragment, useContext, useEffect } from 'react'
import { Badge } from 'react-bootstrap';

import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import SpinnerFile from '../layouts/SpinnerFile';

const Contacts = () => {

    //const [contactAvailability, setAvailability] = useState(0);

    const contactContext = useContext(ContactContext);

    const { contacts, filtered, getContacts, loading } = contactContext;

    useEffect(() => {
        getContacts();
        // eslint-disable-next-line
    }, []);

    if (contacts !== null && contacts.length === 0 && !loading) {
        return <h4>Please add contacts</h4>;
    }

    return (

        <Fragment>

            {loading ?

                <SpinnerFile />

                :

                <Fragment>
                    <br />
                    {filtered ?

                        <h3><Badge variant="secondary" >Searched Contacts</Badge></h3>

                        :
                        <h3><Badge variant="secondary" >Contact Details</Badge></h3>

                    }

                    {
                        filtered ?
                            filtered.map(contact => (
                                <ContactItem key={contact._id} contact={contact} />
                            ))
                            :
                            contacts.map(contact => (
                                <ContactItem key={contact._id} contact={contact} />
                            ))
                    }
                </Fragment>
            }




        </Fragment>

    )
}

export default Contacts;
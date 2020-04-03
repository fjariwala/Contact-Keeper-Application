import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    UPDATE_CONTACT,
    SET_ALERT,
    REMOVE_ALERT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
    SET_CURRENT,
    CLEAR_CURRENT
} from '../types';

const ContactState = (props) => {

    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'paresh',
                email: 'pareshha333@gmail.com',
                phone: '8849901203',
                type: 'personal'
            },
            {
                id: 2,
                name: 'shila',
                email: 'shilabenpj@gmail.com',
                phone: '9898202262',
                type: 'professional'
            },
            {
                id: 3,
                name: 'fenil',
                email: 'feniljariwala82@gmail.com',
                phone: '9898202262',
                type: 'personal'
            }
        ],
        current: null,
        filtered: null
    };

    const [state, dispatch] = useReducer(ContactReducer, initialState);

    // Add contact function
    const addContact = contact => {

        contact.id = 6;
        dispatch({
            type: ADD_CONTACT,
            payload: contact
        })
    }

    // Delete contact
    const deleteContact = id => {

        dispatch({
            type: DELETE_CONTACT,
            payload: id
        })
    }

    // Edit contact
    const editContact = contact => {

        dispatch({
            type: SET_CURRENT,
            payload: contact
        })
    }

    // Clear contact
    const clearContact = contact => {

        dispatch({
            type: CLEAR_CURRENT
        })
    }

    // Update contact
    const updateContact = contact => {

        dispatch({
            type: UPDATE_CONTACT,
            payload: contact
        })
        //clearContact()
    }

    // Search contact
    const searchContact = text => {

        dispatch({
            type: FILTER_CONTACTS,
            payload: text
        })
    }

    // Clear contact
    const clearSearch = () => {

        dispatch({
            type: CLEAR_FILTER
        })
    }

    return (
        <div>
            <ContactContext.Provider value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                addContact,
                deleteContact,
                editContact,
                clearContact,
                updateContact,
                searchContact,
                clearSearch
            }}>
                {props.children}
            </ContactContext.Provider>
        </div>
    )
}


export default ContactState;
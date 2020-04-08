import React, { useReducer } from 'react';
import axios from 'axios';

import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import setAuthToken from '../../utils/setAuthToken';

import {
    GET_CONTACTS,
    CLEAR_CONTACTS,
    ADD_CONTACT,
    DELETE_CONTACT,
    UPDATE_CONTACT,
    SET_ALERT,
    REMOVE_ALERT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
    SET_CURRENT,
    CLEAR_CURRENT,
    CONTACT_ERROR
} from '../types';

const ContactState = (props) => {

    const initialState = {
        contacts: null,
        current: null,
        loading: true,
        filtered: null,
        error: null
    };

    const [state, dispatch] = useReducer(ContactReducer, initialState);

    // Get contacts for specific user
    const getContacts = async () => {

        // load user into global states
        // this method is usefull to load user everysingle time whenever the component mounts
        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }

        try {

            const res = await axios.get('/contact');

            dispatch({
                type: GET_CONTACTS,
                payload: res.data
            })
        } catch (err) {

            dispatch({
                type: CONTACT_ERROR,
                payload: err.response.data.msg
            })
        }
    }

    // Add contact function
    const addContact = async contact => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {

            const res = await axios.post('/contact', contact, config);

            dispatch({
                type: ADD_CONTACT,
                payload: res.data
            })

        } catch (err) {

            dispatch({
                type: CONTACT_ERROR,
                payload: err.response.data.msg
            })
        }

    }

    // Delete contact
    const deleteContact = async (id) => {

        try {

            await axios.delete(`/contact/${id}`)

            dispatch({
                type: DELETE_CONTACT,
                payload: id
            })

        } catch (err) {

            dispatch({
                type: CONTACT_ERROR,
                payload: err.response.data.msg
            })
        }
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
    const updateContact = async (contact) => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {

            const res = await axios.put(`/contact/${contact._id}`, contact, config);

            dispatch({
                type: UPDATE_CONTACT,
                payload: res.data
            })

        } catch (err) {

            dispatch({
                type: CONTACT_ERROR,
                payload: err.response.data.msg
            })
        }

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

    // clear contacts state
    const clearContacts = () => {

        dispatch({
            type: CLEAR_CONTACTS
        })
    }

    return (
        <div>
            <ContactContext.Provider value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                loading: state.loading,
                error: state.error,
                getContacts,
                addContact,
                deleteContact,
                editContact,
                clearContact,
                updateContact,
                searchContact,
                clearSearch,
                clearContacts
            }}>
                {props.children}
            </ContactContext.Provider>
        </div>
    )
}


export default ContactState;
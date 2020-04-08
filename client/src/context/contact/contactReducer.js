import {
    ADD_CONTACT,
    DELETE_CONTACT,
    UPDATE_CONTACT,
    CLEAR_CONTACTS,
    SET_ALERT,
    REMOVE_ALERT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
    SET_CURRENT,
    CLEAR_CURRENT,
    CONTACT_ERROR,
    GET_CONTACTS
} from '../types';

export default (state, action) => {

    switch (action.type) {

        case GET_CONTACTS:
            return {
                ...state,
                contacts: action.payload.contactData,
                loading: false
            }

        case ADD_CONTACT:
            return {
                ...state,
                contacts: [
                    ...state.contacts,
                    action.payload.contact
                ],
                loading: false
            }

        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(
                    contact => contact._id !== action.payload
                ),
                loading: false
            }

        case SET_CURRENT:
            return {
                ...state,
                current: action.payload,
                loading: false
            }

        case CLEAR_CURRENT:
            return {
                ...state,
                current: null,
                loading: false
            }


        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact =>
                    contact._id === action.payload._id ? action.payload : contact
                ),
                loading: false
            }

        case FILTER_CONTACTS:
            return {
                ...state,
                filtered: state.contacts.filter(contact => {
                    const regex = new RegExp(`${action.payload}`, 'gi')
                    return contact.name.match(regex) || contact.email.match(regex);
                }),
                loading: false
            }

        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null,
                loading: false
            }

        case CONTACT_ERROR:
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_CONTACTS:
            return {
                ...state,
                contacts: null,
                current: null,
                loading: false,
                filtered: null,
                error: null
            }

        default:
            return state;

    }
}
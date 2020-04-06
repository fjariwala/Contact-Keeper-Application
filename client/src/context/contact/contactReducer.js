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

export default (state, action) => {

    switch (action.type) {

        case ADD_CONTACT:
            return {
                ...state,
                contacts: [
                    ...state.contacts,
                    action.payload
                ]
            }
            break;

        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload
                )
            }
            break;

        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
            break;

        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
            break;

        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact =>
                    contact.id === action.payload.id ? action.payload : contact
                )
            }
            break;

        case FILTER_CONTACTS:
            return {
                ...state,
                filtered: state.contacts.filter(contact => {
                    const regex = new RegExp(`${action.payload}`, 'gi')
                    return contact.name.match(regex) || contact.email.match(regex);
                })
            }
            break;

        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            }
            break;

        default:
            return state;
            break;
    }
}
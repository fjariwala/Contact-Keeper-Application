import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    USER_LOADED,
    AUTH_ERROR,
    CLEAR_ERROR
} from '../types';

export default (state, action) => {

    switch (action.type) {

        case REGISTER_SUCCESS:

            localStorage.setItem('token', action.payload.token);

            return {

                ...state,
                ...action.paylaod,
                isAuthenticated: true,
                loading: false,
                error: null
            }
            break;

        case REGISTER_FAIL:

            localStorage.removeItem('token');

            return {

                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload
            }
            break;

        default:
            return state;
            break;
    }
}
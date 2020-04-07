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

        case USER_LOADED:

            return {

                ...state,
                isAuthenticated: true,
                loading: false,
                error: null,
                user: action.payload.msg
            }

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:

            localStorage.setItem('token', action.payload.token);
            return {

                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false,
                error: null
            }

        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token');

            return {

                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload
            }


        default:
            return state;

    }
}
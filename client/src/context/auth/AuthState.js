import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';

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

const AuthState = (props) => {

    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: false,
        loading: true,
        error: null,
        user: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState);

    // Load user

    // register user

    // login user

    // logout user

    // clear errors


    return (
        <AuthContext.Provider value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            error: state.error,
            user: state.user
        }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState

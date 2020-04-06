import React, { useReducer } from 'react';
import axios from 'axios';

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
    const registerUser = async (formData) => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {

            const res = await axios.post('/users', formData, config);

            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
                // here res.data is our token
            })

        } catch (err) {

            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.msg
            })
        }
    };

    // login user

    // logout user

    // clear errors


    return (
        <AuthContext.Provider value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            error: state.error,
            user: state.user,
            registerUser
        }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState

import React, { useReducer } from 'react';
import axios from 'axios';

import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';

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
    const loadUser = async () => {

        // load user into global states
        // this method is usefull to load user everysingle time whenever the component mounts
        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }

        try {
            const res = await axios.get('/login');

            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        } catch (err) {

            dispatch({
                type: AUTH_ERROR

            })
        }

    };

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

            loadUser();

        } catch (err) {

            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.msg
            })
        }
    };

    // login user
    const loginUser = async (formData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {

            const res = await axios.post('/login', formData, config);

            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
                // here res.data is our token
            })

            loadUser();

        } catch (err) {

            dispatch({
                type: LOGIN_FAIL,
                payload: err.response.data.msg
            })
        }
    };
    // logout user
    const logoutUser = () => {
        dispatch({
            type: LOGOUT_SUCCESS
        });
    };
    // clear errors


    return (
        <AuthContext.Provider value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            error: state.error,
            user: state.user,
            registerUser,
            loginUser,
            logoutUser,
            loadUser
        }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState

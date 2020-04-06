import React, { useReducer } from 'react';
import alertReducer from './alertReducer';
import AlertContext from './alertContext';

import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props) => {

    const initialState = [];

    const [state, dispatch] = useReducer(alertReducer, initialState);

    // Set alert
    const setAlert = (msg, type, timeout = 3000) => {

        const id = Math.round(Math.random() * 10);

        dispatch({
            type: SET_ALERT,
            payload: { msg, type, id }
        })

        setTimeout(() => dispatch({
            type: REMOVE_ALERT
        }), timeout);
    }

    return (
        <AlertContext.Provider value={{
            setAlert,
            alerts: state
        }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState

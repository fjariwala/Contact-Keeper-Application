import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/** This are the links to show you how to use materialize css too.. */
/** import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';*/

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/pages/Home';
import About from './components/pages/About';
import NavbarMain from './components/layouts/NavbarMain';
import Alerts from './components/layouts/Alerts';
import ContactForm from "./components/contactPages/ContactForm";
import RegisterForm from './components/authPages/Register';
import LoginForm from './components/authPages/Login';
import AuthState from './context/auth/AuthState';
import ContactState from "./context/contact/ContactState";
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/PrivateRouting/PrivateRouter';
//import './App.css';

// load user into global states
// this method is usefull to load user everysingle time whenever the component mounts
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  return (
    <AuthState>
      <ContactState>
        <AlertState>

          <Router>
            <Fragment >

              <NavbarMain />

              <div className="container">
                <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={RegisterForm} />
                  <Route exact path='/login' component={LoginForm} />
                </Switch>

              </div>

            </Fragment>
          </Router>

        </AlertState>
      </ContactState>
    </AuthState >
  );
}

export default App;

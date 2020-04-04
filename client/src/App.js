import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/pages/Home';
import About from './components/pages/About';
import NavbarMain from './components/layouts/NavbarMain';
import ContactState from "./context/contact/ContactState";
import ContactForm from "./components/contactPages/ContactForm";
import RegisterForm from './components/authPages/Register';
import LoginForm from './components/authPages/Login';
import AuthState from './context/auth/AuthState';
//import './App.css';

const App = () => {

  return (
    <AuthState>
      <ContactState>
        <Router>
          <Fragment >

            <NavbarMain />

            <div className="container">
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/register' component={RegisterForm} />
                <Route exact path='/login' component={LoginForm} />
              </Switch>
            </div>

          </Fragment>
        </Router>
      </ContactState>
    </AuthState>
  );
}

export default App;

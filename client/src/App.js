import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/pages/Home';
import About from './components/pages/About';
import NavbarMain from './components/layouts/NavbarMain';
import ContactState from "./context/contact/ContactState";
import ContactForm from "./components/contactPages/ContactForm";;
//import './App.css';

const App = () => {

  return (
    <ContactState>
      <Router>
        <Fragment >

          <NavbarMain />

          <div className="container">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              {/*<Route exact path='/contact' component={ContactForm} /> */}
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ContactState>
  );
}

export default App;

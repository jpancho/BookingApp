import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Home from "./components/home";
import Performers from "./components/performers";
import Bookings from "./components/bookings";
import Signup from "./components/signup";

/**
 * This react application has three main routes, /, /performers, and /bookings/:id
 * Look into /components to see what each route renders and each API call
 */
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">WePerform</Link>
            <div className="navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/performers" className="nav-link">Performers</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/bookings" className="nav-link">Bookings</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/signup" className="nav-link">Sign-up</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/performers" component={Performers} />
          <Route path="/bookings/:id" component={Bookings} />
        </div>
      </Router>
    );
  }
}

export default App;
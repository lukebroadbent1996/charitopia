import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './styles/App.css';


import Homepage from "./components/homepage";
import Recommended from "./components/recommended";
import Register from "./components/register";
import Login from "./components/login";


const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <ul>
            <li>
              <Link to="/" className="navbar-item">Search</Link>
            </li>
            <li>
              <Link to="/recommended" className="navbar-item" >Recommended</Link>
            </li>
            <li>
              <Link to="/account" className="navbar-item">Account</Link>
            </li> 
            <li>
              <Link to="/login" className="navbar-item">Login</Link>
            </li>
            <li>
              <Link to="/register" className="navbar-item">Register</Link>
            </li>
          </ul>
        </div>

        <Switch>

          <Route path="/recommended">
            <Recommended/>
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />

          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
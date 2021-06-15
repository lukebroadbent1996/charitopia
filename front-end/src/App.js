import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';

import Homepage from "./components/hompage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route>
            {/* <Login/> */}
          </Route>
          <Route>
            {/* <Register/> */}
          </Route>
          <Route>
            {/* <Recommended/> */}
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

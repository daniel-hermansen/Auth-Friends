import React from 'react';
import './App.css';
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute"; 

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to ="/login">Login</Link>
          </li>
          <li>
            <Link to ="/friendsList">Friends</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/friendsList" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
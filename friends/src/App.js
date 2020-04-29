
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import"./App.css"
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';


class App extends React.Component {

    constructor() {
        super();
        this.state = { credentials: {} }
    }

    render() {
        return (

          <Router>
              <div className="Nav">
                  <Link to='/login' className= 'link'><h2>Login</h2></Link>
                  <Link to='/protected' className= 'link'><h2>View Friends</h2></Link>     
              </div>
              <div className="Container">
                <h1>Friend Zone </h1>
                <Switch>
                    <Route path="/login" component={Login} />
                    <PrivateRoute exact path='/protected' component={FriendsList} />

                </Switch>
              </div>
          </Router>

        )
    }

}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import"./App.css"
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend';
import DeleteFriend from './components/DeleteFriend';

class App extends React.Component {

    constructor() {
        super();
        this.state = { credentials: {} }
    }

    render() {
        return (

          <Router>
              <div className="Nav">
                  <Link to='/' className= 'link'><h2>Home</h2></Link>
                  <Link to='/login' className= 'link'><h2>Login</h2></Link>
                  <Link to='/friends-list' className= 'link'><h2>View Friends</h2></Link>    
                  <Link to='/add-friend' className= 'link'><h2>Add Friend</h2></Link>    
                  <Link to='/delete-friend' className= 'link'><h2>Delete Friend</h2></Link>    
              </div>
              <div className="Container">
                <h1>List of Friends</h1>
                <Switch>
                    <Route path="/login" component={Login} />
                    <PrivateRoute exact path='/friends-list' component={FriendsList} />
                    <PrivateRoute exact path='/add-friend' component={AddFriend} />
                    <PrivateRoute exact path='/delete-friend' component={DeleteFriend} />
                </Switch>
              </div>
          </Router>

        )
    }

}

export default App;
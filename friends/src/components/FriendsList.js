
import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import AddFriend from './AddFriend';
import DeleteFriend from './DeleteFriend';

class FriendsList extends React.Component{

    constructor(){
        super();
        this.state = { friends: [], isLoading: false }
    }

    componentDidMount() {
        this.getFriendsList();
    }

    getFriendsList = () => {
        this.setState({...this.state, isLoading: true});
        axiosWithAuth().get("/api/friends")
        .then(res => {
            console.log("Successfully got friends",res);
            this.setState({ friends: res.data});
            this.setState({ ...this.state, isLoading: false });
        })
        .catch(err => {
            console.log(err);
            this.setState({...this.state, isLoading: false});
        })
    }

    render(){
        return(
            <div className="FriendsList">
                {this.state.isLoading && <p> Loading...  </p>}
                <div className="ListOfFriends">
                    {this.state.friends.map(friend => 
                        <div key={friend.id}>
                            <h4>{`${friend.name}, ${friend.age} years old`}</h4>
                            <h5>{`ID: ${friend.id}`}</h5>
                        </div>)
                    }
                </div>
                <div className="forms">
                    <AddFriend/>
                    <DeleteFriend/>
                </div>
            </div>
        )
    }

}


export default FriendsList
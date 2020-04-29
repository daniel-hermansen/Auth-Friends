import React from "react"
import axiosWithAuth from "../utils/axiosWithAuth";

class DeleteFriend extends React.Component{

    constructor(){
        super();
        this.state = { id: '' }
    }

    submitHandler = (event) => {
        axiosWithAuth().delete(`/api/friends/${this.state.id}`)
        .then(res => {
            console.log(res)
            alert('Friend deleted')
        })
        .catch(err => console.log(err))
        this.setState({ id: '' })
    }

    changeHandler = (event) => {
        this.setState( { ...this.state.id, [event.target.name]: event.target.value})
        console.log(this.state.id)
    }

    render(){
        return(

            <div className="DeleteFriend">
                <h2>Delete Friend :(</h2>
                <form onSubmit={this.submitHandler}>
                    <input onChange={this.changeHandler} placeholder="Enter an id" name="id" value={this.state.id}/>
                    <button>Delete Friend</button>
                </form>
            </div>

        )
    }

}

export default DeleteFriend
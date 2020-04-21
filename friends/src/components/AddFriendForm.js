import React from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth';

class AddFriendForm extends React.Component {
    state={
        friends:[...this.props.friends,
        {
            name: "",
            age: "",
            email: ""
        }]
    }

    handleChange = e => {
        this.setState({
            friends:[
                ...this.state.friends,
                {[e.target.name]: e.target.value}
            ]
        })
    }

    addNewFriend = e => {
        axiosWithAuth()
        .post('/api/friends')
        .then(res => {
            console.log(res)
        })
        .catch(err =>{
            console.log(err)
        })
    }
    render(){
        return(
            <div className="addFriend">
                <h3>Lets Be Friends...</h3>
                <h6>And, yes your age is important to me... </h6>
                <h6>its more than a number</h6>
                <p>**ALL FIELDS REQUIRED</p>
                <form className="addFriend" onSubmit={this.addNewFriend}>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        placeholder="name"
                        value={this.state.friends.name}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="age">Age:</label>
                    <input 
                        type="text"
                        id="age"
                        name="age"
                        placeholder="age"
                        value={this.state.friends.age}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email"
                        value={this.state.friends.email}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        )

    }
}

export default AddFriendForm;
import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import Friend from "./Friend";
import AddFriendForm from './AddFriendForm';
import {Route, Link} from 'react-router-dom'

class FriendsList extends React.Component{
state={
  friends:[]
}
componentDidMount(){
  this.getFriends();
}
getFriends=()=>{
  axiosWithAuth()
  .get('/api/friends')
  .then(res=>{
    // console.log(res.data)
    this.setState({
      ...this.state.friends,
      friends: res.data
    })
  })
  .catch(err=>{
    console.log(err)
  })
}
render(){
    return(
        <div className="friendslist">
            <h2>Friends Info</h2>            
            <Link to="/friends/add"><button className="add">Add Yourself</button></Link>
            <Route exact path="/friends/add"><AddFriendForm friends={this.state.friends}/></Route>
            <Friend friends={this.state.friends} />

        </div>
    )
}
}

export default FriendsList;
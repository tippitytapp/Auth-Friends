import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Friend from "./Friend" 

function FriendsList(){
    const [friends, setFriends] = useState([{
        id: 1,
        name: 'Rachel Green',
        age: 30,
        email: 'rachel@friends.com'
      },
      {
        id: 2,
        name: 'Joey Tribbiani',
        age: 34,
        email: 'joey@friends.com'
      }])

    return(
        <div className="friendslist">
            <h2>Friends Info</h2>
            <Friend friends={friends} />
        </div>
    )
}

export default FriendsList;
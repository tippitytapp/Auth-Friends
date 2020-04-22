import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import FriendCard from './FriendCard'

function Friend (props){

    console.log(props.id)
    return(
        <div className="friend">
            {props.friends.map((item)=> {
                return(
                    <div className="ind-friend">
                    <FriendCard key={item.id} name={item.name} age={item.age} email={item.email} />
                    </div>
                )
            })}
        </div>
    )
}

export default Friend;
import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'

function Friend (props){

    console.log(props)
    return(
        <div className="friend">
            {props.friends.map((item)=> {
                const removeFriend = id =>{
                    axiosWithAuth()
                    .delete(`/api/friends/:${id}`)
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err)
                    })
                }
                return(
                    <div className="ind-friend">
                    <h3>{item.name}</h3>
                    <h4>{item.age}</h4>
                    <h5>{item.email}</h5>
                    <button onClick={removeFriend(`${item.id}`)}>{item.id}</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Friend;
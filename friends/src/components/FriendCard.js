import React from 'react'

function FriendCard(props){
    console.log(props)
    return (
        <div className="ind-cardc">
    <h3>{props.name}</h3>
    <h4>{props.age}</h4>
    <h5>{props.email}</h5>
    <button>Remove Friend</button>
    </div>
    )
}
export default FriendCard;
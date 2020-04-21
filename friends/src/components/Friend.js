import React from 'react';

function Friend (props){
    return(
        <div className="friend">
            {props.friends.map((item)=> {
                return(
                    <div className="ind-friend">
                    <h3>{item.name}</h3>
                    <h4>{item.age}</h4>
                    <h5>{item.email}</h5>
                    </div>
                )
            })}
        </div>
    )
}

export default Friend;
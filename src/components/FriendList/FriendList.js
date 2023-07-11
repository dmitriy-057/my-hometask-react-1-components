import React from "react";
import FriendListItem from "./FriendListItem";
import "./FriendList.css";

function FriendList({friends}) {
    return(
    <ul className="friendList">
        {friends.map(({id,avatar,name,isOnline}) => {
        return (
            <FriendListItem 
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
            />
        )
        }
            )}
    </ul>
    )
}
export default FriendList;
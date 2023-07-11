import React from "react";
import "./FriendListItem.css";

function FriendListItem({id,isOnline,avatar,name}) {

    return(
    <li className="friendItem" key={id}>
        <div className="avatarContainer">
            <span className={isOnline ? "isOnline" : "isOffline"}>
            </span>
            <img className="avatarFriend" src={avatar} alt={name} width="48" />
        </div>
        <p className="name">{name}</p>
    </li>
    )
}

export default FriendListItem;
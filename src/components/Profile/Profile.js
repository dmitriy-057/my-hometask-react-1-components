import React from "react";
import "./Profile.css";



function Profile(props) {
    const {username, tag, location, avatar,stats} = props;

    return (
    <div className="profile">
    <div className="description">
        <img
        src={avatar ? avatar : "https://cdn-icons-png.flaticon.com/512/1077/1077012.png"}
        alt={username}
        className="avatar"
        />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
    </div>

    <ul className="stats">
        <li>
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
        </li>
        <li>
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
        </li>
        <li>
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
        </li>
    </ul>
    </div>
    )
}

export default Profile;
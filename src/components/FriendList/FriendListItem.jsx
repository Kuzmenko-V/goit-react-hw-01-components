import React from "react";
import PropTypes from 'prop-types';


const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className="item" >
           {isOnline ? (<span className="status online"></span>): (<span className="status offline"></span>) }
            <img className="avatar" src={avatar} alt="avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    );
};
FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;

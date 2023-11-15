import React from 'react';
import Avatar from './Avatar';

function UserInfo({ user }) {
    const { name } = user;
    return (
        <div className="UserInfo">
            <Avatar user={user} />
            <div className="UserInfo-name">{name}</div>
        </div>
    );
}

export default UserInfo;

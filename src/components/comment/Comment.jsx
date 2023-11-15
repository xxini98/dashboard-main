import React from 'react';
import UserInfo from './UserInfo';

function Comment() {
    return (
        <div className="comment">
            <UserInfo />
            <div className="comment-text">넘나 귀여운 고양이예요. 겨울이는 러시안블루인가요?</div>
            <div className="comment-date">2023.03.10</div>
        </div>
    );
}

export default Comment;

import React from 'react';
import ChatItem from "./ChatItem";

const CardChat = () => {
    return (
        <div className='card-chat'>
            <div className='d-flex'>
                <input className='card-chat__input w-100' type="text" placeholder='placeholder'/>
                <button className='card-chat__submit' >Submit</button>
            </div>
            <div>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
            </div>
        </div>
    );
};

export default CardChat;
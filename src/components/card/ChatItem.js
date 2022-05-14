import React from 'react';

const ChatItem = () => {
    return (
        <div className='chat-item d-flex'>
            <div>
                <div className='chat-item__circle'/>
            </div>
            <div className='chat-item__text'>
                <p className='fs18'>Lorem ipsum</p>
                <p className='fs12-chat'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cupiditate eligendi
                    eos et hic nobis nostrum quos reprehenderit tempora ut?
                </p>
            </div>
        </div>
    );
};

export default ChatItem;
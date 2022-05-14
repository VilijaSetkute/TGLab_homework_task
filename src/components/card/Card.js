import React from 'react';
import CardVisual from "./CardVisual";
import CardChat from "./CardChat";

const Card = () => {
    return (
        <div className='card'>
            <CardVisual/>
            <CardChat/>
        </div>
    );
};

export default Card;
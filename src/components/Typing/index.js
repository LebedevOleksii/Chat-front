import React from "react";

import './Typing.scss';

const Typing = () => {
    return (
        <div className="chat-bubble">
            <div className="loading">
                <div className="dot one"/>
                <div className="dot two"/>
                <div className="dot three"/>
            </div>
            <div className="tail"/>
        </div>
    )
};

export default Typing;
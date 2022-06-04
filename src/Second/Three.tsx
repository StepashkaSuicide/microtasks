
//APP

import React, {useState} from 'react';
import {ThreeInput} from "./ThreeInput";

export function Three() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])



    const addMessage = (title: string) => {
       let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    return (
        <div>
            <ThreeInput addMessage={addMessage}/>
            {message.map((m, index) => {
                return (
                    <div key={index}>{m.message} </div>
                )
            })}
        </div>
    )
}


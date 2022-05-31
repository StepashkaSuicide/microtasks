import React, {useState} from 'react';
import {FullInput} from "./FullInput";
import {Input} from "./Input";
import {Button} from "./Button";

function TaskTwo() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])


    let [title, setTitle] = useState('')
    console.log(title)

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    const callBackButtonHandler = ()=> {
        addMessage(title)
        setTitle('')
    }


    return (
        <div>
            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>
            {/*<FullInput   addMessage={addMessage}   />*/}
            {message.map((m, index) => {
                return (
                    <div key={index}>{m.message} </div>
                )
            })}
        </div>
    );
};

export default TaskTwo;
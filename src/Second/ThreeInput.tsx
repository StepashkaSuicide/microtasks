//FULL INPUT

import React, {ChangeEvent, useState} from 'react';

type ThreeInputType = {
    addMessage: (title: string) => void
}


export const ThreeInput = (props: ThreeInputType) => {

    const [title, setTitle] = useState('')

    const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const buttonHandler = () => {
        props.addMessage(title)
        setTitle('')
    }


    return (
        <div>
            <input value={title} onChange={inputHandler}/>
            <button onClick={buttonHandler}>+</button>
        </div>
    );
};


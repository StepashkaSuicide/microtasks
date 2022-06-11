//FULL INPUT

import React, {ChangeEvent, useState} from 'react';

type ThreeInputType = {
    addMessage: (title: string) => void
}



export const ThreeInput = (props: ThreeInputType) => {

    const [title, setTitle] = useState('')



    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const clickHandler = () => {
        props.addMessage(title)
        setTitle('')
    }



    return (
        <div>
            <input value={title} onChange={changeHandler}/>
            <button onClick={clickHandler}>+</button>
        </div>
    );
};


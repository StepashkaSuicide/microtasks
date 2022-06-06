import React from 'react';


type ButtonType = {
    name: string
    callBack: () => void
}


export const Button = (props: ButtonType) => {

    const clickHandler = () => {
        props.callBack()
    }


    return (
        <button onClick={clickHandler}> {props.name} </button>
    );
};

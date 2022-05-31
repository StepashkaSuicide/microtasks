import React from 'react';

type ButtonType = {
    name: string
    callBack:()=> void
}



export const Button = (props: ButtonType ) => {
    const onclickButtonHandler = ()=> {
        props.callBack()
    }

    return (
        <button onClick={onclickButtonHandler}>{props.name}</button>
    );
};


import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: ()=> void
}





export const Button = (props: ButtonPropsType) => {

    const clickHandler = ()=> {
        props.callBack()
    }




    return (
        <button onClick={clickHandler}>{props.name} </button>
    );
};


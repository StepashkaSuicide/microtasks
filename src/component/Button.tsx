import React from 'react';
import s from './Button.module.css'
import {FilterValuesType} from '../App';



type buttonType = {
    name: string
    callBack: ()=> void
}


export const Button = (props: buttonType) => {


    const onClickHandler1 = () => {
        props.callBack()

    }


    return (
        <button className={s.button} onClick={onClickHandler1}>{props.name}</button>
    );
};

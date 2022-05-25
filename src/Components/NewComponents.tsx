import React from 'react';
import {filterType} from "../App";


type arrMoneyType = {
    money: Array<moneyType>
    a: (name: filterType)=>void
}


type moneyType = {
    banknots: string
    value: number
    number: string
}





export const NewComponents = (props: arrMoneyType) => {
    return (
        <>
            <ul>
                {props.money.map(m => {
                    return (

                        <li key={m.number}>
                            <span>{m.banknots}</span>
                            <span>{m.value}</span>
                            <span>{m.number}</span>

                        </li>
                    )
                })}
            </ul>
            <button onClick={()=>props.a('all')}>all</button>
            <button onClick={()=>props.a('RUBLS')}>RUBLS</button>
            <button onClick={()=>props.a('Dollars')}>Dollars</button>
        </>
    );
};


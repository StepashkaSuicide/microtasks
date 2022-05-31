import React from 'react';
import {filterType} from "../App";


type arrMoneyType = {
    money: Array<moneyType>
    filterT: (name: filterType)=>void
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
            <button onClick={()=>props.filterT('all')}>all</button>
            <button onClick={()=>props.filterT('RUBLS')}>RUBLS</button>
            <button onClick={()=>props.filterT('Dollars')}>Dollars</button>
        </>
    );
};


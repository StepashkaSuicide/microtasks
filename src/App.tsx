import React, {useState} from 'react';
import Cars from "./Cars";
import {Button} from "./Components/Buttons/Button";
import {NewComponents} from "./Components/NewComponents";


// const topCars = [
//     {id: 1, manufacturer: 'BMW', model: 'm5cs'},
//     {id: 2, manufacturer: 'Mercedes', model: 'e63s'},
//     {id: 3, manufacturer: 'Audi', model: 'rs6'}
// ]



export type filterType = 'all' | 'Dollars' | 'RUBLS'



function App() {


    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

const [filter, setFilter] = useState<filterType>('all')


    let currentMoney = money

    if(filter==='RUBLS') {
        currentMoney = money.filter((f => f.banknots === 'RUBLS'))
    }
    if(filter==='Dollars') {
        currentMoney = money.filter((f => f.banknots === 'Dollars'))
    }
    const onClickFilterHandler = (name: filterType) => {
       setFilter(name)
    }
    return (
        <>
            <NewComponents  money={currentMoney}
            a={onClickFilterHandler}
            />
            {/*<ul>*/}
            {/*    {currentMoney.map(m => {*/}
            {/*        return (*/}

            {/*            <li key={m.number}>*/}
            {/*                <span>{m.banknots}</span>*/}
            {/*                <span>{m.value}</span>*/}
            {/*                <span>{m.number}</span>*/}

            {/*            </li>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</ul>*/}
            {/*<button onClick={()=>onClickFilterHandler('all')}>all</button>*/}
            {/*<button onClick={()=>onClickFilterHandler('RUBLS')}>RUBLS</button>*/}
            {/*<button onClick={()=>onClickFilterHandler('Dollars')}>Dollars</button>*/}
        </>
    )


//работа с кнопками: callBack

//     const buttonFoo1 = (subscriber: string) => {
//         console.log(subscriber)
//     }
//     const buttonFoo2 = (subscriber: string) => {
//         console.log(subscriber)
//     }
// const buttonFoo3 = () => {
//         console.log(`I'm stupid button` )
//     }
//
//     return (
//         <>
//             <Cars topCars={topCars}/>
//             <Button name={'PROJECT JIJA - 1'} callBack={() => buttonFoo1('Hi')}/>
//             <Button name={'PROJECT JIJA - 2'} callBack={() => buttonFoo2('bye')}/>
//             <Button name={'PROJECT JIJA - 3'} callBack={buttonFoo3}/>
//
//         </>
//     );
//работа с useState

    // let [a, setA] = useState(1)
    //
    // const onClickHandler =() => {
    //     setA(++a)
    // }
    // const onClickHandler1 =() => {
    //     setA(0)
    // }
    //
    //
    // return(
    //     <div>
    //         <h1>{a}</h1>
    //         <button onClick={onClickHandler}>number</button>
    //         <button onClick={onClickHandler1}>0</button>
    //     </div>
    // )


}


export default App;

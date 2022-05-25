import React, {useState} from 'react';
import Cars from "./Cars";
import {Button} from "./Components/Buttons/Button";


const topCars = [
    {id: 1, manufacturer: 'BMW', model: 'm5cs'},
    {id: 2, manufacturer: 'Mercedes', model: 'e63s'},
    {id: 3, manufacturer: 'Audi', model: 'rs6'}
]

function App() {

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

    let [a, setA] = useState(1)

    const onClickHandler =() => {
        setA(++a)
    }
    const onClickHandler1 =() => {
        setA(0)
    }


    return(
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandler1}>0</button>
        </div>
    )


}





export default App;

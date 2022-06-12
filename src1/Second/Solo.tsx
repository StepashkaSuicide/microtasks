import React, {useState} from 'react';
import {SoloButton} from "./SoloButton";
import {SoloInput} from "./SoloInput";


export function Solo() {

    const [title, setTitle] = useState('')



    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    let addMessage = (title: string)=> {
        let newMessage ={message: title}
        setMessage([newMessage, ...message])
        setTitle('')
    }

const callBackButtonHandler = ()=> {
        addMessage(title)
}

    return (
        <div>
            <SoloButton name={'X'} callBack={callBackButtonHandler}/>
            <SoloInput title={title} setTitle={setTitle}/>

            {message.map((m, index) => {
                return <div key={index}>{m.message}</div>
            })}
        </div>
    )
}















































//
// import React, {useState} from 'react';
// import {SoloInput} from "./SoloInput";
// import {SoloButton} from "./SoloButton";
//
// export function Solo() {
//
//     let [title, setTitle] = useState('')
//
//     let [message, setMessage] = useState([
//         {message: 'message1'},
//         {message: 'message2'},
//         {message: 'message3'},
//     ])
//     const addMessage = (title: string) => {
//         let newMessage = {message: title}
//         setMessage([newMessage, ...message])
//         setTitle('')
//     }
//     const callBackButtonHandler = () => {
//         addMessage(title)
//     }
//     return (
//         <div>
//             <SoloInput setTitle={setTitle} title={title}/>
//             <SoloButton callBack={callBackButtonHandler} name={'+'}/>
//
//             {message.map((m, index) => {
//                 return <div key={index}>{m.message}</div>
//             })}
//         </div>
//     )
// }




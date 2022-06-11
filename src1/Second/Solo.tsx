import React, {useState} from 'react';
import {SoloInput} from "./SoloInput";
import {SoloButton} from "./SoloButton";

export function Solo() {


    const [title, setTitle] = useState('')


    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])


    const addMessage = () => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }


    return (
        <div>
            <SoloInput setTitle={setTitle} title={title}/>
            <SoloButton callBack={addMessage} name={'+'}/>
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




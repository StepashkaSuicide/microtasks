import React, {ChangeEvent} from 'react';

type inputHandlerType = {
    title: string
    setTitle: (title: string) =>void
}



export const SoloInput = (props: inputHandlerType) => {

const inputHandler = (event: ChangeEvent<HTMLInputElement>)=> {
    props.setTitle(event.currentTarget.value)
}


    return (
        <input value={props.title}  onChange={inputHandler}/>
    );
};






































// import React, {ChangeEvent} from 'react';
//
// type SoloInputType = {
//     title: string
//     setTitle: (title: string) => void
// }
//
//
// export const SoloInput = (props: SoloInputType) => {
//
//
//     const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
//         props.setTitle(event.currentTarget.value)
//
//     }
//
//
//     return (
//         <input value={props.title} onChange={onChangeInputHandler}/>
//     );
// };
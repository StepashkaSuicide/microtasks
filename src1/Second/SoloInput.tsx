import React, {ChangeEvent} from 'react';

type InputType ={
    title: string
    setTitle: (title: string)=> void
}



export const SoloInput = (props: InputType) => {

    const change = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }

    return (
        <input value={props.title} onChange={change}/>
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
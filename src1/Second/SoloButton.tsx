import React from 'react';

type ButtonType = {
    name: string
    callBack: () => void
}



export const SoloButton = (props: ButtonType) => {

const click = ()=> {
    props.callBack()
}
    return (
        <button onClick={click}>{props.name}</button>
    );
};





















































// import React from 'react';
//
//
// type ButtonType = {
//     name: string
//     callBack: ()=> void
// }
//
//
//
// export const SoloButton = (props: ButtonType) => {
//
//     const onClickButtonHandler = () => {
//         props.callBack()
//
//
//     }
//     return (
//         <button onClick={onClickButtonHandler}>{props.name}</button>
//     );
// };

import React from 'react';

type SoloButtonType = {
    name: string
    callBack: () => void
}


export const SoloButton = (props: SoloButtonType) => {


    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
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

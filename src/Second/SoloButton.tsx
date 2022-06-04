import React from 'react';

type buttonType = {
    name: string
    callBack: () => void
}


export const SoloButton = (props: buttonType) => {

const buttonHandler =() => {
 props.callBack()
}
    return (
        <button onClick={buttonHandler}>{props.name}</button>
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

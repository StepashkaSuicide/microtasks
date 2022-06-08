// import {ChangeEvent, KeyboardEvent, useState} from 'react';
//
// type fullInput = {
//     callBack: () => void
// }
//
//
// export const FullInput = (props: fullInput) => {
//     // let [title, setTitle] = useState("")
//     const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//         setTitle(e.currentTarget.value)
//     }
//     const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
//         if (e.charCode === 13) {
//             addTask();
//         }
//     }
//     const addTask = () => {
//         addTask();
//         setTitle("");
//     }
//
//
//     return (
//
//
//         <div>
//             <input value={title}
//                    onChange={onChangeHandler}
//                    onKeyPress={onKeyPressHandler}
//             />
//             <button onClick={addTask}>+</button>
//         </div>
//
//     );
// };

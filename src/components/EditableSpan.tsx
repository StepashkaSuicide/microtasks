import React, {ChangeEvent, useState} from 'react';



type EditableSpanType = {
    title: string
    callBack: (newTitle: string)=> void
}

export const EditableSpan = (props: EditableSpanType) => {

    const [newTitle, setNewTitle] = useState(props.title)
    const [edit, setEdit] = useState(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const addTitle = () => {
        if (newTitle !== "") {
            props.callBack(newTitle);
        }
    }
    const onDoubleClickHandler = ()=> {
        setEdit(!edit)
        addTitle()
    }
    return (
        edit
            ? <input  onChange={onChangeHandler} autoFocus onBlur={onDoubleClickHandler}   value={newTitle}/>
            : <span onDoubleClick={onDoubleClickHandler}>{props.title}</span>

    )
}

//
// import React, {ChangeEvent, useState} from 'react';
//
//
// type EditableSpanPropsType = {
//     title: string
//     callBack:(newTitle:string)=>void
// }
//
// export const EditableSpan = (props: EditableSpanPropsType) => {
//     const [edit, setEdit] = useState(false)
//     let [newTitle, setNewTitle] = useState(props.title)
//     const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//         setNewTitle(e.currentTarget.value)
//     }
//     const addTitle = () => {
//         if (newTitle !== "") {
//             props.callBack(newTitle);
//         }
//     }
//
//
//
//     const onDoubleClickHandler = () => {
//         setEdit(!edit)
//         addTitle()
//     }
//
//     return (
//         edit
//             ? <input autoFocus onBlur={onDoubleClickHandler} value={newTitle} onChange={onChangeHandler}/>
//             : <span onDoubleClick={onDoubleClickHandler}>{props.title}</span>
//
//     );
// };

import React, {ChangeEvent, useState} from 'react';


type EditableSpanType = {
    title: string
    callBack: (newTitle: string)=> void
}

export const EditableSpan = (props: EditableSpanType) => {
    const [edit, setEdit] = useState(false)
    const [newTitle, setNewTitle] = useState(props.title)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>)=> {
        setNewTitle(e.currentTarget.value)
    }
    const doubleClickHandler = ()=> {
        setEdit(!edit)
        addTask()
    }

    const addTask = () => {
        if (newTitle !== '') {
            props.callBack(newTitle);
        }
    }

    return (
        edit
            ? <input autoFocus onBlur={doubleClickHandler} value={newTitle} onChange={onChangeHandler}/>
            : <span onDoubleClick={doubleClickHandler}>{props.title}</span>
    );
};

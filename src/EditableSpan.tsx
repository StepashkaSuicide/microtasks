import React, {ChangeEvent, useState} from 'react';


type EditableSpanType = {
    title: string
    callBack: (newTitle: string)=> void
}

export const EditableSpan = (props: EditableSpanType) => {
    const [newTitle, setNewTitle] = useState(props.title)
    const [edit, setEdit] = useState(false)


    const addTask = () => {
        let newTitleEdit = newTitle.trim();
        if (newTitle !== '') {
            props.callBack(newTitleEdit);
            setNewTitle('');
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }


    const onDoubleClickHandler = ()=> {
        setEdit(!edit)
        addTask()
    }


    return (
        edit
            ? <input value={newTitle} onChange={onChangeHandler} onBlur={onDoubleClickHandler} autoFocus/>
            : <span onDoubleClick={onDoubleClickHandler}>{props.title}</span>
    );
};

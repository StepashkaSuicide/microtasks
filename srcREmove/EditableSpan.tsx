import React, {ChangeEvent, useState} from 'react';

type EditableSpanType = {
    title: string
    callBack: (newTitle: string) => void
}
export const EditableSpan: React.FC<EditableSpanType> = (props) => {


    let [newTitle, setNewTitle] = useState(props.title)
    let [edit, setEdit] = useState(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const addTask = () => {
        let newTitleTrim = newTitle.trim();
        if (newTitleTrim !== '') {
            props.callBack(newTitleTrim);
            setNewTitle('');
        }
    }

    const onDoubleClickHandler = () => {
        setEdit(!edit)
        addTask()
    }

    return (
        edit
            ? <input autoFocus value={newTitle} onChange={onChangeHandler} onBlur={onDoubleClickHandler}/>
            : <span onDoubleClick={onDoubleClickHandler}>{props.title}</span>
    )


}
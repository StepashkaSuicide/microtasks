import React, {ChangeEvent, useState} from 'react';

export type EditableSpanType = {
    title: string
    callBack: (newTitle: string) => void
}
export const EditableSpanX = (props: EditableSpanType) => {
    const [newTitle, setNewTitle] = useState(props.title)
    const [edit, setEdit] = useState(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }
    const onDoubleClickHandler = () => {
        setEdit(!edit)
        addTask()
    }

    const addTask = ()=> {
        let titleInput = newTitle.trim()
        if (titleInput !=='') {
            props.callBack(titleInput)
            setNewTitle('')
        }
    }

    return (
        edit
            ? <input autoFocus value={newTitle} onChange={onChangeHandler} onBlur={onDoubleClickHandler}/>
            : <span onDoubleClick={onDoubleClickHandler}>{props.title}</span>
    )


}
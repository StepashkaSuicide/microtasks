import React, {ChangeEvent, useState} from 'react';


type EditSpanType = {
    callBack: (newTitle: string)=> void
    title: string
    isDone?: boolean
}


export const EditSpan = (props: EditSpanType) => {
    const [edit, setEdit] = useState(false)
    const [newTitle, setNewTitle] = useState<string>(props.title)

    const addTask = () => {
        const trimmedTitle = newTitle.trim()
        if (trimmedTitle) {
            props.callBack(trimmedTitle)
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }
    const doubleClickHandler = () => {
        setEdit(!edit)
        addTask()

    }

    return (
        edit
            ? <input autoFocus onBlur={doubleClickHandler}  value={newTitle} onChange={onChangeHandler}/>
            : <span onDoubleClick={doubleClickHandler}
                    className={props.isDone ? 'task isDone' : 'task'}>{props.title}</span>
    );
};

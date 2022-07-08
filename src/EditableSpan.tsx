import React, {ChangeEvent, useState} from 'react';




type EditableSpanType = {
    title: string
    callBack: (newTitle: string)=> void
}

export const EditableSpan: React.FC<EditableSpanType> = (props) => {

    const [newTitle, setNewTitle] = useState(props.title)
    const [edit, setEdit] = useState(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)

    }
    const addItem = () => {
        if (newTitle !== '') {
            props.callBack(newTitle);
        }
    }
    const doubleClickHandler = ()=> {
        setEdit(!edit)
        addItem()
    }


    return (
        edit
        ? <input value={newTitle}  onChange={onChangeHandler} autoFocus onBlur={doubleClickHandler}/>
        : <span onDoubleClick={doubleClickHandler}>{props.title} </span>
    );
};

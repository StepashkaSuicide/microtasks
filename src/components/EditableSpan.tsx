import React, {ChangeEvent, useState} from 'react';


type EditableSpanType = {
    title: string
    callBack: (newTitle: string)=> void
}

export const EditableSpan = (props: EditableSpanType) => {

    const [edit, setEdit] = useState(false)
    const [newTitle, setNewTitle] = useState(props.title)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const addTask = () => {
          if (newTitle !== "") {
              props.callBack(newTitle);
              // setTitle("");
          }
     }


    const changeEditHandler = () => {
        setEdit(!edit)
        addTask()
    }

    return (
        edit
            ? <input onChange={onChangeHandler} autoFocus onBlur={changeEditHandler} value={newTitle}/>
            : <span onDoubleClick={changeEditHandler}>{props.title}</span>
    );
};

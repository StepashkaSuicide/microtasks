import React, {ChangeEvent, KeyboardEvent, useState} from 'react';


type EditableSpanType = {
    title: string
    callBack: (newTitle: string) => void
}
export const EditableSpan = (props: EditableSpanType) => {

    let [newTitle, setNewTitle] = useState(props.title)
    let [edit, setEdit] = useState(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }
  const onDoubleClickHandler = ()=> {
        setEdit(!edit)
      addTask()
  }

    const addTask = () => {
        let title = newTitle.trim();
        if (newTitle !== '') {
            props.callBack(title);
            setNewTitle('');
        }
    }

    return (
        edit
            ? <input value={newTitle} onChange={onChangeHandler} onBlur={onDoubleClickHandler} autoFocus/>
            : <span onDoubleClick={onDoubleClickHandler}>{props.title}</span>
    );
};

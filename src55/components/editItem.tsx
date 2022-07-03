import React, {ChangeEvent, useState} from 'react';


type EditItemType ={
    callBack:(newTitle: string)=> void
    title: string
}


export const EditItem = (props: EditItemType) => {

    const [edit, setEdit] = useState(false)
    const [newTitle, setNewTitle]=useState(props.title)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const addTask = () => {
        if (newTitle !== '') {
            props.callBack(newTitle);
        }
    }

    const editTask = ()=> {
        setEdit(!edit)
        addTask()
    }

    return (
        edit
            ? <input  onChange={onChangeHandler} onBlur={editTask} autoFocus value={newTitle}/>
            : <span onDoubleClick={editTask}>{props.title}</span>
    );
};

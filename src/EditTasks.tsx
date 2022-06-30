import React, {ChangeEvent, useState} from 'react';

type EditTasksType = {
    title: string
    callBack: (newTitle: string)=> void
}


export const EditTasks = (props: EditTasksType) => {

    const [edit, setEdit] = useState(false)
    const [newTitle, setNewTitle]=useState(props.title)

    const editHandler = () => {
        setEdit(!edit)
        addTask()

    }

    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>)=> {
        setNewTitle(e.currentTarget.value)

    }
    const addTask = () => {
        if (newTitle !== '') {
            props.callBack(newTitle);
        }
    }



    return (
        edit
            ? <input onChange={onChangeTitleHandler} autoFocus onBlur={editHandler} value={newTitle}/>
            : <span onDoubleClick={editHandler}>{props.title}</span>
    );
};

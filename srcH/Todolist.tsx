import React, {ChangeEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {ExcellentInput} from './ExcellentInput';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (todolistId: string, title: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (id: string) => void
    filter: FilterValuesType
    editTodo: (todolistId: string, newTitle: string) => void
    editTask: (todolistId: string, taskId: string, newTitle: string)=> void
}

export function Todolist(props: PropsType) {


    const removeTodolist = () => props.removeTodolist(props.id)

    const onAllClickHandler = () => props.changeFilter('all', props.id);
    const onActiveClickHandler = () => props.changeFilter('active', props.id);
    const onCompletedClickHandler = () => props.changeFilter('completed', props.id);


    const addTaskHandler = (title: string) => {
        props.addTask(props.id, title)
    }
    const editSpanTodoHandler = (newTitle: string) => {
        props.editTodo(props.id, newTitle)
    }
    return <div>
        <h3>
            <EditSpan title={props.title} callBack={editSpanTodoHandler}/>
            <button onClick={removeTodolist}>x</button>
        </h3>
        <ExcellentInput callBack={addTaskHandler}/>
        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id, props.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.id, newIsDoneValue, props.id);
                    }

                    const editSpanTaskHandler = ( newTitle: string) => {
                        props.editTask(props.id, t.id, newTitle)
                    }
                    return <li key={t.id} className={t.isDone ? 'is-done' : ''}>
                        <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>
                        {/*<span>{t.title}</span>*/}
                        <EditSpan title={t.title} callBack={editSpanTaskHandler}/>

                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter === 'all' ? 'active-filter' : ''}
                    onClick={onAllClickHandler}>All
            </button>
            <button className={props.filter === 'active' ? 'active-filter' : ''}
                    onClick={onActiveClickHandler}>Active
            </button>
            <button className={props.filter === 'completed' ? 'active-filter' : ''}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
}

export type EditSpanType = {
    title: string
    callBack: (newTitle: string) => void
}
export const EditSpan = (props: EditSpanType) => {

    const [newTitle, setNewTitle] = useState(props.title)
    const [edit, setEdit] = useState(false)

    const addTask = () => {
        let trimTitle = newTitle.trim();
        if (trimTitle !== '') {
            props.callBack(trimTitle);
            setNewTitle('');
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }
    const onDoubleClickHandler = () => {
        setEdit(!edit)
        addTask()
    }
    return (
        edit
            ? <input onChange={onChangeHandler} onBlur={onDoubleClickHandler} autoFocus value={newTitle}/>
            : <span onDoubleClick={onDoubleClickHandler}>{props.title}</span>
    )

}









import React, {ChangeEvent} from 'react';
import {FilterValuesType} from './App';
import {Input} from './InputXX';
import {EditableSpanX} from './EditableSpanX';

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
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (id: string) => void
    filter: FilterValuesType
    editTodolist: (todolistId: string, newTitle: string)=> void
    editTask: (todolistId: string, taskID: string, newTitle: string)=> void
}

export function Todolist(props: PropsType) {


    const removeTodolist = () => props.removeTodolist(props.id)

    const onAllClickHandler = () => props.changeFilter('all', props.id);
    const onActiveClickHandler = () => props.changeFilter('active', props.id);
    const onCompletedClickHandler = () => props.changeFilter('completed', props.id);

    const addTaskHandler = (title: string) => {
        props.addTask(title, props.id)
    }

    const editTodolistHandler = (newTitle: string)=> {
        props.editTodolist(props.id, newTitle)
    }




    return <div>
        <h3>
            <EditableSpanX callBack={editTodolistHandler} title={props.title}/>
            {/*{props.title}*/}
            <button onClick={removeTodolist}>x</button>
        </h3>
        <Input callBack={addTaskHandler}/>
        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id, props.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.id, newIsDoneValue, props.id);
                    }

                    const editTaskHandler = ( newTitle: string)=> {
                            props.editTask(props.id, t.id, newTitle)
                    }

                    return <li key={t.id} className={t.isDone ? 'is-done' : ''}>
                        <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>
                        {/*<span>{t.title}</span>*/}

                        <EditableSpanX title={t.title} callBack={editTaskHandler}/>
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


import React, {ChangeEvent, memo, useCallback} from 'react';
import {TodolistType} from './App';
import {Input} from './InputXX';
import {EditableSpanX} from './EditableSpanX';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';
import {addTaskAC, changeTaskStatusAC, editTaskAC, removeTaskAC} from './state/tasksReducer';
import {changeFilterAC, editTodolistAC, removeTodolistAC } from './state/todolistReducer';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
type PropsType = {
    todolist: TodolistType

}

export const Todolis1t = memo(({todolist: {title, id, filter}}: PropsType) => {
    console.log('Todolist')
    let tasks = useSelector<AppRootStateType, Array<TaskType>>(state => state.tasks[id])
    const dispatch = useDispatch()

    const removeTodolist = useCallback(() => {
        dispatch(removeTodolistAC(id))
    }, [dispatch])
    const addTaskHandler = useCallback((title: string) => {
        dispatch(addTaskAC(title, id))
    },[dispatch])
    const editTodolistHandler = (newTitle: string) => {
        dispatch(editTodolistAC(id, newTitle))
    }
    const onAllClickHandler = () => dispatch(changeFilterAC( id, 'all'))
    const onActiveClickHandler = () => dispatch(changeFilterAC(id, 'active'))
    const onCompletedClickHandler = () => dispatch(changeFilterAC(id, 'completed'))

    if (filter === "active") {
        tasks = tasks.filter(t => t.isDone === false);
    }
    if (filter === "completed") {
        tasks = tasks.filter(t => t.isDone === true);
    }

    return <div>
        <h3>
            <EditableSpanX callBack={editTodolistHandler} title={title}/>
            <button onClick={removeTodolist}>x</button>
        </h3>
        <Input callBack={addTaskHandler}/>
        <ul>
            {
                tasks.map(t => {
                    const onClickHandler = () => dispatch(removeTaskAC(t.id, id))
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        dispatch(changeTaskStatusAC(t.id, newIsDoneValue, id));
                    }

                    const editTaskHandler = (newTitle: string) => {
                        dispatch(editTaskAC(id, t.id, newTitle))
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
            <button className={filter === 'all' ? 'active-filter' : ''}
                    onClick={onAllClickHandler}>All
            </button>
            <button className={filter === 'active' ? 'active-filter' : ''}
                    onClick={onActiveClickHandler}>Active
            </button>
            <button className={filter === 'completed' ? 'active-filter' : ''}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
})


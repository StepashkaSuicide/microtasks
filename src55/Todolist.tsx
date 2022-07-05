import React, {ChangeEvent} from 'react';
import {FilterValuesType} from './App';
import {Input} from './Input';
import {EditItem} from './components/editItem';

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
    editItemTask: (todolistID: string, taskID: string, newTitle: string)=> void
    editTitle: (todolistID: string, newTitle: string)=> void

}

export function Todolist(props: PropsType) {
    const removeTodolist = () => props.removeTodolist(props.id)
    const onAllClickHandler = () => props.changeFilter('all', props.id);
    const onActiveClickHandler = () => props.changeFilter('active', props.id);
    const onCompletedClickHandler = () => props.changeFilter('completed', props.id);

    const InputCallBack = (title: string) => {
        props.addTask(title, props.id)
    }

    const editTitleHandler = ( newTitle: string)=> {
        props.editTitle(props.id, newTitle)
    }

    return <div>
        <h3>
            {/*{props.title}*/}
            <EditItem callBack={editTitleHandler} title={props.title}/>
            <button onClick={removeTodolist}>x</button>
        </h3>
        <Input callBack={InputCallBack}/>
        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id, props.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.id, newIsDoneValue, props.id);
                    }

                    const editItemHandler = (newTitle: string) => {
                        props.editItemTask(props.id, t.id, newTitle)
                    }

                    return <li key={t.id} className={t.isDone ? 'is-done' : ''}>
                        <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>
                        <EditItem title={t.title} callBack={editItemHandler}/>
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




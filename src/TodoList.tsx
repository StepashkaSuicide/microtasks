import React, {ChangeEvent} from 'react';
import {FilterValuesType} from './App';
import {Input} from './Input';
import {EditSpan} from './EditSpan';


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}


type TodoListPropsType = {
    id: string
    title: string
    tasks: TaskType[]
    filter: FilterValuesType
    addTask: (title: string, todolistID: string) => void
    removeTask: (taskID: string, todolistID: string) => void
    changeTodoListFilter: (filter: FilterValuesType, todolistID: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean, todolistID: string) => void
    removeTodolist: (todolistID: string) => void
    editSpan: (newTitle: string, taskID: string, todolistID:string)=> void
    editTodo: (todolistID: string, newTitle: string)=> void
}

export const TodoList = (props: TodoListPropsType) => {

    const createOnClickHandler = (filter: FilterValuesType): () => void => {
        return () => props.changeTodoListFilter(filter, props.id)
    }

    const tasksJSX = props.tasks.length
        ? props.tasks.map(t => {
            const removeTask = () => props.removeTask(t.id, props.id)
            const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) =>
                props.changeTaskStatus(t.id, e.currentTarget.checked, props.id)


            const editSpanTask = (newTitle: string ) => {
                props.editSpan(newTitle, t.id, props.id)
            }

            return (
                <li key={t.id}>
                    <input
                        onChange={changeTaskStatus}
                        type="checkbox"
                        checked={t.isDone}

                    />
                    <EditSpan    title={t.title} callBack={editSpanTask}/>
                    <button onClick={removeTask}>х</button>
                </li>
            )
        })
        : <span>Your taskslist is empty</span>

    const removeTodolist = () => props.removeTodolist(props.id)

    const addTaskCallBack = (title: string) => {
        props.addTask(title, props.id)
    }

    const editTodolist = ( newTitle: string)=> {
        props.editTodo(props.id, newTitle)
    }

    return (
        <div>
            <h3>
                <EditSpan callBack={editTodolist} title={props.title}/>
                <button onClick={removeTodolist}>Del</button>
            </h3>
            <Input callBack={addTaskCallBack}/>
            <ul>
                {tasksJSX}
            </ul>
            <div>
                <button
                    className={props.filter === 'all' ? 'active' : ''}
                    onClick={createOnClickHandler('all')}
                >All
                </button>
                <button
                    className={props.filter === 'active' ? 'active' : ''}
                    onClick={createOnClickHandler('active')}
                >Active
                </button>
                <button
                    className={props.filter === 'completed' ? 'active' : ''}
                    onClick={createOnClickHandler('completed')}
                >Completed
                </button>
            </div>
        </div>
    );
};



























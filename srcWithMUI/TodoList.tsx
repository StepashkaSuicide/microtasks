import React, {ChangeEvent} from 'react';
import {FilterValuesType} from './App';
import {Input} from './Input';
import {EditSpan} from './EditSpan';
import {Button} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import s from './Todolist.module.css'


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
    editSpan: (newTitle: string, taskID: string, todolistID: string) => void
    editTodo: (todolistID: string, newTitle: string) => void
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


            const editSpanTask = (newTitle: string) => {
                props.editSpan(newTitle, t.id, props.id)
            }


            return (
                <li key={t.id}  className={`${s.li} ${ t.isDone ? 'task isDone': 'task'}`} >

                    <IconButton  onClick={removeTask}> <HighlightOffIcon color={'secondary'} fontSize={'small'}/></IconButton>
                    <Checkbox
                        checked={t.isDone}
                        onChange={changeTaskStatus}
                        color="primary"
                        inputProps={{'aria-label': 'secondary checkbox'}}
                    />

                    <EditSpan title={t.title} callBack={editSpanTask}/>



                </li>
            )
        })
        : <span>Your taskslist is empty</span>

    const removeTodolist = () => props.removeTodolist(props.id)

    const addTaskCallBack = (title: string) => {
        props.addTask(title, props.id)
    }

    const editTodolist = (newTitle: string) => {
        props.editTodo(props.id, newTitle)
    }

    return (
        <div>
            <h3>
                <EditSpan callBack={editTodolist} title={props.title}/>
                <IconButton aria-label="delete"  color="primary" onClick={removeTodolist}> <DeleteIcon  fontSize={'small'}/></IconButton>
            </h3>
            <Input callBack={addTaskCallBack}/>
            <ul>
                {tasksJSX}
            </ul>
            <div>
                <Button variant="contained"
                        size={'small'}
                        color={props.filter === 'all' ? 'secondary' : 'primary'}
                        onClick={createOnClickHandler('all')}
                >All
                </Button>
                <Button
                    size={'small'}
                    variant="contained"
                    color={props.filter === 'active' ? 'secondary' : 'primary'}
                    onClick={createOnClickHandler('active')}
                >Active
                </Button>
                <Button
                    size={'small'}
                    variant="contained"
                    color={props.filter === 'completed' ? 'secondary' : 'primary'}
                    onClick={createOnClickHandler('completed')}
                >Completed
                </Button>
            </div>
        </div>
    );
};

















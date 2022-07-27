import React, {useReducer} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';
import {Input} from './InputXX';
import {
    addTodolistAC,
    changeTodolistFilterAC,
    editTodolistAC,
    removeTodolistAC,
    todolistsReducer
} from './state/todolists-reducer';
import {addTaskAC, changeTaskStatusAC, editTaskAC, removeTaskAC, tasksReducer} from './state/tasksReducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';


export type FilterValuesType = "all" | "active" | "completed";
export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

export function AppWithRedux() {
    const todolists = useSelector<AppRootStateType, Array<TodolistType>>(state=>state.todolists)
    const tasks = useSelector<AppRootStateType, TasksStateType>(state=>state.tasks)
    const dispatch = useDispatch()




    function removeTask(taskID: string, todolistId: string) {
        dispatch(removeTaskAC(taskID, todolistId))
    }

    function addTask(title: string, todolistId: string) {
        dispatch(addTaskAC(title, todolistId))
    }

    function changeStatus(taskID: string, isDone: boolean, todolistId: string) {
        dispatch(changeTaskStatusAC(taskID, isDone, todolistId))
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        dispatch(changeTodolistFilterAC(value, todolistId))
    }

    function removeTodolist(id: string) {
        dispatch(removeTodolistAC(id))
    }

    const addTodolist = (title: string)=> {
        const action = addTodolistAC(title)
        dispatch(action)
        // dispatch(action)
    }
    const editTodolist = (todolistId: string, newTitle: string)=> {
        dispatch(editTodolistAC(todolistId, newTitle ))
    }
    const editTask=(todolistId: string, taskID: string, newTitle: string)=> {
        dispatch(editTaskAC(todolistId, taskID, newTitle))
    }


    return (
        <div className="App">
            <Input callBack={addTodolist} />
            {
                todolists.map(tl => {
                    let allTodolistTasks = tasks[tl.id];
                    let tasksForTodolist = allTodolistTasks;

                    if (tl.filter === "active") {
                        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === false);
                    }
                    if (tl.filter === "completed") {
                        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === true);
                    }

                    return <Todolist
                        key={tl.id}
                        id={tl.id}
                        title={tl.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={tl.filter}
                        removeTodolist={removeTodolist}
                        editTodolist={editTodolist}
                        editTask={editTask}
                    />
                })
            }

        </div>
    );
}


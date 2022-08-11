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
} from './state/1todolists-reducer';
import {addTaskAC, changeTaskStatusAC, editTaskAC, removeTaskAC, tasksReducer} from './state/tasksReducer';


export type FilterValuesType = "all" | "active" | "completed";
export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

export function AppWithReducer() {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, dispatchToTodoReducer] = useReducer(todolistsReducer, [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ])

    let [tasks, dispatchToTaskReducer] = useReducer(tasksReducer,{
        [todolistId1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true}
        ],
        [todolistId2]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "React Book", isDone: true}
        ]
    });



    function removeTask(taskID: string, todolistId: string) {
        dispatchToTaskReducer(removeTaskAC(taskID, todolistId))
    }

    function addTask(title: string, todolistId: string) {
        dispatchToTaskReducer(addTaskAC(title, todolistId))
    }

    function changeStatus(taskID: string, isDone: boolean, todolistId: string) {
        dispatchToTaskReducer(changeTaskStatusAC(taskID, isDone, todolistId))
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        dispatchToTodoReducer(changeTodolistFilterAC(value, todolistId))
    }

    function removeTodolist(id: string) {
        dispatchToTodoReducer(removeTodolistAC(id))
    }

    const addTodolist = (title: string)=> {
        const action = addTodolistAC(title)
        dispatchToTodoReducer(action)
        dispatchToTaskReducer(action)
    }
    const editTodolist = (todolistId: string, newTitle: string)=> {
        dispatchToTodoReducer(editTodolistAC(todolistId, newTitle ))
    }
    const editTask=(todolistId: string, taskID: string, newTitle: string)=> {
        dispatchToTaskReducer(editTaskAC(todolistId, taskID, newTitle))
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


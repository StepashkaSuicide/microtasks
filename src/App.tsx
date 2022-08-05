import React, {useReducer, useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';
import { Input } from './InputXX';

export type FilterValuesType = "all" | "active" | "completed";
export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

function App() {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ])

    let [tasks, setTasks] = useState<TasksStateType>({
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
        setTasks({...tasks, [todolistId]:tasks[todolistId].filter(f=>f.id!==taskID)})
    }

    function addTask(title: string, todolistId: string) {
        const taskID = v1()
            let newTask = {id: taskID, title: title, isDone: false}
            setTasks({...tasks, [todolistId]: [newTask, ...tasks[todolistId]]})
    }

    function changeStatus(taskID: string, isDone: boolean, todolistId: string) {
        setTasks({...tasks, [todolistId]:tasks[todolistId].map(t=>t.id===taskID ? {...t, isDone}: t)})
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        setTodolists(todolists.map(t=>t.id===todolistId ? {...t, filter: value}: t))

    }

    function removeTodolist(id: string) {
        setTodolists(todolists.filter(f=> f.id!== id))
            delete tasks[id]
    }

    const addTodolist = (title: string)=> {
        const todoID = v1()
        let newTodolist: TodolistType = {id: todoID, title: title, filter: "all"}
        setTodolists([newTodolist, ...todolists])
        setTasks({...tasks, [newTodolist.id]:[]})
    }
    const editTodolist = (todolistId: string, newTitle: string)=> {
        setTodolists(todolists.map(t=> t.id===todolistId ? {...t, title: newTitle}: t))
    }
    const editTask=(todolistId: string, taskID: string, newTitle: string)=> {
        setTasks({...tasks, [todolistId]:tasks[todolistId].map(t=> t.id===taskID ? {...t, title: newTitle}: t)})
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

export default App;

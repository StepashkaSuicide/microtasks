import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}
type TasksType = {
    [key: string]: Array<TaskType>
}

export type FilterValuesType = 'all' | 'active' | 'completed';
function App() {
    let todolistID1 = v1()
    let todolistID2 = v1()

    let [todolists, setTodolist] = useState<Array<TodolistType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])
    let [tasks, setTasks] = useState<TasksType>({
        [todolistID1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'Rest API', isDone: false},
            {id: v1(), title: 'GraphQL', isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'Rest API', isDone: false},
            {id: v1(), title: 'GraphQL', isDone: false},
        ]
    });

    const onClickRemoveTodolist = (todolistID:string)=> {
        setTodolist(todolists.filter(f=> f.id!==todolistID))
        delete tasks[todolistID]
    }

    function removeTask(todolistID: string, taskID: string) {
        setTasks({...tasks, [todolistID]: tasks[todolistID].filter(f => f.id !== taskID)})
    }
    function addTask(todolistID: string, title: string) {
        const newTask = {id: v1(), title: title, isDone: false}
        setTasks({...tasks, [todolistID]: [newTask, ...tasks[todolistID]]})
    }
    function changeStatus(todolistID: string, taskId: string, isDone: boolean) {
        setTasks({...tasks, [todolistID]: tasks[todolistID].map(t=> t.id ===taskId ? {...t, isDone} : t)})
    }
    function changeFilter(todolistID: string, value: FilterValuesType) {
            setTodolist(todolists.map(t=> t.id === todolistID ? {...t, filter: value} : t))
    }

    return (
        <div className="App">
            {todolists.map(t => {
                let tasksForTodolist = tasks[t.id];

                if (t.filter === 'active') {
                    tasksForTodolist = tasks[t.id].filter(t => t.isDone === false);
                }
                if (t.filter === 'completed') {
                    tasksForTodolist = tasks[t.id].filter(t => t.isDone === true);
                }
                return (
                    <Todolist
                        onClickRemoveTodolist={onClickRemoveTodolist}
                        todolistID={t.id}
                        title={t.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={t.filter}
                    />
                )
            })}

        </div>
    );
}

export default App;

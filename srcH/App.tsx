import React, {useReducer} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';
import {ExcellentInput} from './ExcellentInput';
import {addTaskAC, changeStatusAC, editTaskAC, removeTaskAC, taskReducerX} from './state/taskReducer';
import {addTodolistAc, changeFilterAc, removeTodolistAc, todolistReducerX} from './state/todolistReducer';

export type FilterValuesType = 'all' | 'active' | 'completed';
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


    let [todolists, dispatchToTodoReducer] = useReducer(todolistReducerX, [
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ])

    let [tasks, dispatchToTaskReducer] = useReducer(taskReducerX,{
        [todolistId1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true}
        ],
        [todolistId2]: [
            {id: v1(), title: 'Milk', isDone: true},
            {id: v1(), title: 'React Book', isDone: true}
        ]
    });


    function removeTask(id: string, todolistId: string) {
        dispatchToTaskReducer(removeTaskAC(id, todolistId))
    }

    function addTask(todolistId: string, title: string ) {
        dispatchToTaskReducer(addTaskAC(todolistId, title))
    }

    function changeStatus(id: string, isDone: boolean, todolistId: string) {
        dispatchToTaskReducer(changeStatusAC(id, isDone, todolistId))
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        dispatchToTodoReducer(changeFilterAc(value, todolistId ))
    }

    function removeTodolist(id: string) {
        dispatchToTodoReducer(removeTodolistAc(id))
        dispatchToTaskReducer(removeTodolistAc(id))
        console.log(tasks)
    }
const addTodolist = (title: string)=> {
        dispatchToTodoReducer(addTodolistAc(title))
        dispatchToTaskReducer(addTodolistAc(title))
}

const editTodo = (todolistId: string, newTitle: string)=> {

}
const editTask = (todolistId: string, taskId: string, newTitle: string)=> {
    dispatchToTaskReducer(editTaskAC(todolistId,taskId, newTitle ))
}
    return (
        <div className="App">
            <ExcellentInput callBack={addTodolist}/>
            {
                todolists.map(tl => {
                    let allTodolistTasks = tasks[tl.id];
                    let tasksForTodolist = allTodolistTasks;

                    if (tl.filter === 'active') {
                        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === false);
                    }
                    if (tl.filter === 'completed') {
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
                        editTodo={editTodo}
                        editTask={editTask}
                    />
                })
            }

        </div>
    );
}

export default App;

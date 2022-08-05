import React from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';
import {addTodolistAC} from './state/todolistReducer';
import {Input} from './InputXX';
import {Todolis1t} from './Todolis1t';



export type FilterValuesType = "all" | "active" | "completed";
export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}


export function AppWithRedux() {

    const todolists = useSelector<AppRootStateType, Array<TodolistType>>(state=>state.todolists)
    const dispatch = useDispatch()

    const addTodolist = (title: string)=> {
        dispatch(addTodolistAC(title))
    }


    return (
        <div className="App">
            <Input callBack={addTodolist} />
            {
                todolists.map(tl => {

                    return <Todolis1t
                        key={tl.id}
                        todolist={tl}
                    />
                })
            }
        </div>
    );
}














// let allTodolistTasks = tasks[tl.id];
// let tasksForTodolist = allTodolistTasks;
//
// if (tl.filter === "active") {
//     tasksForTodolist = allTodolistTasks.filter(t => t.isDone === false);
// }
// if (tl.filter === "completed") {
//     tasksForTodolist = allTodolistTasks.filter(t => t.isDone === true);
// }
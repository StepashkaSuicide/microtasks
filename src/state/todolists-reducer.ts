//
// type todolistReducerType = {
//
// }


import {FilterValuesType, TodolistType} from '../App';
import {v1} from 'uuid';

export const todolistsReducer = (state: Array<TodolistType>, action: tsarType)=> {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(f=> f.id!== action.payload.todolistId1)
        }
        case 'ADD-TODOLIST': {
                let newTodolistId = v1();
                let newTodolist = {id: newTodolistId, title: action.payload.newTodolistTitle, filter: 'all'};
            return [...state, newTodolist]
        }
        case 'CHANGE-TODOLIST-TITLE': {
            return state.map(t=> t.id ===action.payload.todolistId2 ? {...t, title: action.payload.newTodolistTitle}: t)
        }
        case 'CHANGE-TODOLIST-FILTER':{
            return state.map(f=> f.id===action.payload.todolistId2 ? {...f, filter: action.payload.newFilter}: f)
        }


        default: return state
    }
}

type tsarType = changeFilterACType| removetodolistACType | addTodolistACType | changeTodolistTitleACType

type removetodolistACType = ReturnType<typeof removeTodolistAC>

export const removeTodolistAC = (todolistId1: string)=> {
    return{
        type: 'REMOVE-TODOLIST',
        payload: {todolistId1}
    }as const
}

type addTodolistACType = ReturnType<typeof addTodolistAC>


export const addTodolistAC =(newTodolistTitle: string)=> {
    return{
         type: 'ADD-TODOLIST',
        payload: {newTodolistTitle}
    }as const
}


type changeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>


export const changeTodolistTitleAC = (todolistId2: string, newTodolistTitle: string)=> {
    return{
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {
            todolistId2, newTodolistTitle
        }
    }as const
}

type changeFilterACType = ReturnType<typeof changeFilterAC>


export const changeFilterAC = (todolistId2: string, newFilter: FilterValuesType)=> {
    return{
        type: 'CHANGE-TODOLIST-FILTER',
        payload: {todolistId2, newFilter}
    }as const
}









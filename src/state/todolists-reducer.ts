import {FilterValuesType, TodolistType} from '../App';
import {v1} from 'uuid';

type tsarType =
    ReturnType<typeof changeTodolistTitleAC>
    | ReturnType<typeof removeTodolistAC>
    | ReturnType<typeof addTodolistAC>
    | ReturnType<typeof changeTodolistFilterAC>
    | ReturnType<typeof editTodolistAC>


const initialState: Array<TodolistType> = []


export const removeTodolistAC = (todolistId1: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {todolistId: todolistId1}
    } as const
}
export const addTodolistAC = (newTodolistTitle: string) => {

    return {
        type: 'ADD_TODOLIST',
        payload: {newTodolistTitle, todolistId: v1() },

    } as const
}

export const changeTodolistTitleAC = (todolistId2: string, newTodolistTitle: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {todolistId: todolistId2, newTodolistTitle}
    } as const
}

export const changeTodolistFilterAC = (newFilter: FilterValuesType, todolistId: string ) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        payload: {newFilter, todolistId: todolistId}
    } as const
}
export const editTodolistAC = (todolistId: string, newTitle: string) => {
    return {
        type: 'EDIT_TODOLIST',
        payload: {todolistId, newTitle}
    } as const
}

export const todolistsReducer = (state=initialState, action: tsarType):Array<TodolistType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(f => f.id !== action.payload.todolistId)
        }
        case 'ADD_TODOLIST': {
            return [
                ...state,
                {id: action.payload.todolistId, title: action.payload.newTodolistTitle, filter: "all"}]
        }
        case 'CHANGE-TODOLIST-TITLE': {
            return state.map(t => t.id === action.payload.todolistId ? {
                ...t,
                title: action.payload.newTodolistTitle
            } : t)
        }
        case 'CHANGE-TODOLIST-FILTER': {
            return state.map(t => t.id === action.payload.todolistId ? {...t, filter: action.payload.newFilter} : t)

        }
        case 'EDIT_TODOLIST': {
            return (
                state.map(t=>t.id===action.payload.todolistId ? {...t, title: action.payload.newTitle}:t)
            )
        }
        default:
            return state
    }
}


























































//
// // import {FilterValuesType, TodolistType} from '../App';
// // import {v1} from 'uuid';
// //
// // export const todolistsReducer = (state: Array<TodolistType>, action: tsarType)=> {
// //     switch (action.type) {
// //         case 'REMOVE-TODOLIST': {
// //             return state.filter(f=> f.id!== action.payload.todolistId)
// //         }
// //         case 'ADD-TODOLIST': {
// //                 let newTodolistId = v1();
// //                 let newTodolist = {id: newTodolistId, title: action.payload.newTodolistTitle, filter: 'all'};
// //             return [...state, newTodolist]
// //         }
// //         case 'CHANGE-TODOLIST-TITLE': {
// //             return state.map(t=> t.id ===action.payload.todolistId ? {...t, title: action.payload.newTodolistTitle}: t)
// //         }
// //         case 'CHANGE-TODOLIST-FILTER':{
// //             return state.map(f=> f.id===action.payload.todolistId ? {...f, filter: action.payload.newFilter}: f)
// //         }
// //
// //
// //         default: return state
// //     }
// // }
// //
// // type tsarType =
// //     ReturnType<typeof changeFilterAC> | ReturnType<typeof removeTodolistAC>
// //     | ReturnType<typeof addTodolistAC>
// //     | ReturnType<typeof changeTodolistTitleAC>
// //
// //
// // export const removeTodolistAC = (todolistId: string)=> {
// //     return{
// //         type: 'REMOVE-TODOLIST',
// //         payload: {todolistId}
// //     }as const
// // }
// //
// //
// //
// // export const addTodolistAC =(newTodolistTitle: string)=> {
// //     return{
// //          type: 'ADD-TODOLIST',
// //         payload: {newTodolistTitle}
// //     }as const
// // }
// //
// //
// //
// //
// // export const changeTodolistTitleAC = (todolistId: string, newTodolistTitle: string)=> {
// //     return{
// //         type: 'CHANGE-TODOLIST-TITLE',
// //         payload: {
// //             todolistId, newTodolistTitle
// //         }
// //     }as const
// // }
// //
// //
// //
// // export const changeFilterAC = (todolistId: string, newFilter: FilterValuesType)=> {
// //     return{
// //         type: 'CHANGE-TODOLIST-FILTER',
// //         payload: {todolistId, newFilter}
// //     }as const
// // }
// //
// //
//
//
//
//
//
//

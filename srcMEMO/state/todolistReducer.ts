import { v1 } from 'uuid';
import {FilterValuesType, TodolistType} from '../App';

export type ActionCreatorType =
    ReturnType<typeof changeFilterAC> |
    ReturnType<typeof editTodolistAC> |
    ReturnType<typeof removeTodolistAC> |
    ReturnType<typeof addTodolistAC>

const initialState: Array<TodolistType> = []

export const removeTodolistAC = (id: string) => {
    return {
        type: 'REMOVE_TODOLIST',
        payload: {id}
    } as const
}
export const addTodolistAC = (title: string, ) => {
    return {
        type: 'ADD_TODOLIST',
        payload: title

    } as const
}
export const changeFilterAC = (todolistId: string, value: FilterValuesType) => {
    return {
        type: 'CHANGE_FILTER',
        payload: {todolistId, value}
    } as const
}
export const editTodolistAC = (todolistId: string, newTitle: string) => {
    return {
        type: 'EDIT_TODOLIST',
        payload: {todolistId, newTitle}
    } as const
}

export const todolistReducer = (state=initialState, action: ActionCreatorType) => {
    switch (action.type) {
        case 'CHANGE_FILTER': {
            return state.map(t => t.id === action.payload.todolistId ? {...t, filter: action.payload.value} : t)
        }

        case 'EDIT_TODOLIST': {
            return state.map(t => t.id === action.payload.todolistId ? {...t, title: action.payload.newTitle} : t)
        }

        case 'ADD_TODOLIST': {
            let newTodolist = {todolistId: v1(), title: action.payload, filter: "all"}
            return [newTodolist,...state]

        }
        case 'REMOVE_TODOLIST': {
            return state.filter(f=>f.id!==action.payload.id)
        }
        default:
            return state
    }
}
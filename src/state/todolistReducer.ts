import {FilterValuesType, TodolistType} from '../App';
import {v1} from 'uuid';


type ActionType = ReturnType<typeof changeFilterAc>
    | ReturnType<typeof removeTodolistAc>
    | ReturnType<typeof addTodolistAc>
    | ReturnType<typeof editTodoAc>


export const changeFilterAc = (value: FilterValuesType, todolistId: string) => {
    return {
        type: 'change_filter',
        payload: {value, todolistId}
    } as const
}

export const removeTodolistAc = (todolistId: string) => {
    return {
        type: 'remove_todo',
        payload: {todolistId}
    } as const
}
export const addTodolistAc = (title: string) => {
    return {
        type: 'add_todo',
        payload: {title, todolistId: v1()}
    } as const
}
export const editTodoAc = (todolistId: string, newTitle: string) => {
    return {
        type: 'edit_todo',
        payload: {todolistId, newTitle}
    } as const
}

export const todolistReducerX = (state: Array<TodolistType>, action: ActionType) => {
    switch (action.type) {
        case 'change_filter': {
            return  state.map(t=>t.id===action.payload.todolistId
                ? {...t, filter: action.payload.value}:t)
        }

        case 'remove_todo':{
            return state.filter(f=>f.id!==action.payload.todolistId)
        }

        case 'add_todo': {
            let todoID= v1()
            let newTodo = {id: todoID, title: action.payload.title, filter: 'all'}
            return [newTodo, ...state]
        }

        case 'edit_todo': {
            return state.map(t=>t.id===action.payload.todolistId
                ? {...t, title: action.payload.newTitle}:t)
        }

        default:
            return state
    }
}
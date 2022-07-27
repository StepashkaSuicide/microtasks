import {TasksStateType} from '../App';
import {v1} from 'uuid';
import {addTodolistAc} from './todolistReducer';


 type ActionType =
    ReturnType<typeof removeTaskAC> |
    ReturnType<typeof addTaskAC> |
    ReturnType<typeof changeStatusAC> |
    ReturnType<typeof editTaskAC> |
    ReturnType<typeof addTodolistAc>


export const removeTaskAC = (taskID: string, todolistID: string) => {
    return {
        type: 'remove_task',
        payload: {taskID, todolistID}
    } as const
}
export const addTaskAC = (todolistId: string, title: string) => {
    return {
        type: 'add_task',
        payload: {todolistId, title}
    } as const
}

export const changeStatusAC = (taskID: string, isDone: boolean, todolistId: string) => {
    return {
        type: 'change_status',
        payload: {taskID, isDone, todolistId}
    } as const
}
export const editTaskAC = (todolistId: string, taskId: string, newTitle: string) => {
    return {
        type: 'edit_task',
        payload: {todolistId, taskId, newTitle}
    } as const
}

export const taskReducerX = (state: TasksStateType, action: ActionType) => {
    switch (action.type) {
        case 'remove_task':
            return {
                ...state,
                [action.payload.todolistID]: state[action.payload.todolistID]
                    .filter(f => f.id !== action.payload.taskID)
            }
        case 'add_task':
            let newTask = {id: v1(), title: action.payload.title, isDone: false}
            return {
                ...state,
                [action.payload.todolistId]: [newTask, ...state[action.payload.todolistId]]
            }
        case 'change_status':
            return {
                ...state,
                [action.payload.todolistId]: state[action.payload.todolistId]
                    .map(t => t.id === action.payload.taskID ? {...t, isDone: action.payload.isDone} : t)
            }
        case 'edit_task':
            return {
                ...state,
                [action.payload.todolistId]: state[action.payload.todolistId]
                    .map(t => t.id === action.payload.taskId ? {...t, title: action.payload.newTitle} : t)
            }
        case 'add_todo':
            return {
                ...state,
                [action.payload.todolistId]:[]
            }


        default:
            return state
    }
}
import {TasksStateType} from '../App';
import {v1} from 'uuid';
import {addTodolistAC} from './todolists-reducer';


export type ActionsType =
    ReturnType<typeof removeTaskAC>
    | ReturnType<typeof addTaskAC>
    | ReturnType<typeof changeTaskStatusAC>
    | ReturnType<typeof addTodolistAC>
    | ReturnType<typeof editTaskAC>



const initialState: TasksStateType = {}

export const removeTaskAC = (taskID: string, todolistID: string) => {
    return {
        type: 'remove_task',
        payload: {taskID, todolistID}
    } as const
}
export const addTaskAC = (title: string, todolistID: string) => {
    return {
        type: 'add_task',
        payload: {todolistID, title}
    } as const
}
export const changeTaskStatusAC = (taskID: string, isDone: boolean, todolistID: string) => {
    return {
        type: 'change_task_status',
        payload: {taskID, isDone, todolistID}
    } as const
}
export const editTaskAC = (todolistId: string, taskID: string, newTitle: string) => {
    return {
        type: 'edit_task',
        payload: {todolistId, taskID, newTitle}
    } as const
}


export const tasksReducer = (state=initialState, action: ActionsType): TasksStateType => {
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
                [action.payload.todolistID]: [newTask, ...state[action.payload.todolistID]]
            }
        case 'change_task_status':
            return {
                ...state,
                [action.payload.todolistID]: state[action.payload.todolistID].map(t => t.id === action.payload.taskID
                    ? {...t, isDone: action.payload.isDone} : t)
            }
        case 'ADD_TODOLIST':
            return {
                ...state,
                [action.payload.todolistId]: []
            }
        case 'edit_task':
            return {
                [action.payload.todolistId]: state[action.payload.todolistId].map(t => t.id === action.payload.taskID
                    ? {...t, title: action.payload.newTitle} : t)
            }

        default:
           return  state
        // throw new Error('I don\'t understand this type')
    }
}


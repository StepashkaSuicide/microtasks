import { v1 } from 'uuid';
import {TasksStateType} from '../App';



export type ActionsType = ReturnType<typeof removeTaskAC>
    | ReturnType<typeof addTaskAC>
    | ReturnType<typeof changeTaskStatusAC>
    | ReturnType<typeof changeTaskTitleAC>
    | ReturnType<typeof addTodolistAC>

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK':
            return {
                ...state,
                [action.todolistId]:state[action.todolistId].filter(f=>f.id!==action.taskID)
            }

        case 'ADD_TASK':
            return {
                ...state,
                [action.todolistId]:[{id:v1(), title: action.title, isDone: false}, ...state[action.todolistId]]
            }
        case 'CHANGE_TASK_STATUS':
            return {
                ...state,
                [action.todolistId]:state[action.todolistId].map(t=> t.id===action.taskID
                    ? {...t, isDone: action.isDone}
                    : t)

            }
        case 'CHANGE_TASK_TITLE':
            return {
                [action.todolistId]:state[action.todolistId].map(t=> t.id===action.taskID
                    ? {...t, title: action.title}
                    : t)
            }
        case 'ADD_TODOLIST':
            return {
                ...state,
                [action.payload.todolistId]:[]
            }
        default:
            throw new Error("I don't understand this type")
    }
}

export const removeTaskAC = (todolistId: string, taskID:string  ) => {
    return { type: 'REMOVE-TASK', todolistId, taskID } as const
}
export const addTaskAC = (title: string, todolistId:string) => {
    return { type: 'ADD_TASK', title, todolistId} as const
}
export const changeTaskStatusAC = (taskID: string, isDone: boolean, todolistId: string) => {
    return { type: 'CHANGE_TASK_STATUS', taskID, isDone, todolistId } as const
}
export const changeTaskTitleAC = (taskID: string, title:string, todolistId: string ) => {
    return { type: 'CHANGE_TASK_TITLE', taskID, title, todolistId } as const
}
export const addTodolistAC = ( title:string ) => {
    return { type: 'ADD_TODOLIST', title } as const
}

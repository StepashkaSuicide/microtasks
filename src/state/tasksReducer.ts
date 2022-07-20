import { v1 } from 'uuid';
import {TasksStateType} from '../App';


export type FirstActionType = ReturnType<typeof removeTaskAC>
export type SecondActionType = ReturnType<typeof addTaskAC>

type ActionsType = FirstActionType | SecondActionType

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

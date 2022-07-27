


import {tasksReducer} from './tasksReducer';
import {todolistsReducer} from './todolists-reducer';
import {combineReducers, createStore, legacy_createStore} from 'redux';

const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer
})
export const store = legacy_createStore(rootReducer);
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;

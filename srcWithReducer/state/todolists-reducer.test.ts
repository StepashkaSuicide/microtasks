import {addTodolistAC, changeTodolistFilterAC, changeTodolistTitleAC, removeTodolistAC, todolistsReducer} from './todolists-reducer';
import {v1} from 'uuid';
import {FilterValuesType, TodolistType} from '../App';

test('correct todolist should be removed', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]



    const endState = todolistsReducer(startState, removeTodolistAC(todolistId1))

    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(todolistId2);
});


test('correct todolist should be added', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let newTodolistTitle = "New Todolist";

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    const endState = todolistsReducer(startState, addTodolistAC(newTodolistTitle))

    expect(endState.length).toBe(3);
    expect(endState[2].title).toBe(newTodolistTitle);
});


test('correct todolist should change its name', () => {
    let todolistId1 = v1()
    let todolistId2 = v1()

    let newTodolistTitle = 'New Todolist'

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ]

    const action = {
        type: 'CHANGE-TODOLIST-TITLE',
        id: todolistId2,
        title: newTodolistTitle
    }

    const endState = todolistsReducer(startState, changeTodolistTitleAC(todolistId2, newTodolistTitle))

    expect(endState[0].title).toBe('What to learn')
    expect(endState[1].title).toBe(newTodolistTitle)
})

 test('correct filter of todolist should be changed', () => {
    let todolistId1 = v1()
    let todolistId2 = v1()

    let newFilter: FilterValuesType = "completed"

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    const action = {
        type: 'CHANGE-TODOLIST-FILTER',
        id: todolistId2,
        filter: newFilter
    }

    const endState = todolistsReducer(startState, changeTodolistFilterAC(todolistId2,newFilter ))

    expect(endState[0].filter).toBe("all")
    expect(endState[1].filter).toBe(newFilter)
})



















// import {addTodolistAC, changeFilterAC, changeTodolistTitleAC, removeTodolistAC, todolistsReducer} from './todolists-state';
// import {v1} from 'uuid';
// import {FilterValuesType, TodolistType} from '../App';
//
// test.skip('correct todolist should be removed', () => {
//     let todolistId = v1();
//     let todolistId = v1();
//
//     const startState: Array<TodolistType> = [
//         {id: todolistId, title: "What to learn", filter: "all"},
//         {id: todolistId, title: "What to buy", filter: "all"}
//     ]
//
//
//
//     const endState = todolistsReducer(startState, removeTodolistAC(todolistId))
//
//     expect(endState.length).toBe(1);
//     expect(endState[0].id).toBe(todolistId);
// });
//
//
// test.skip('correct todolist should be added', () => {
//     let todolistId = v1();
//     let todolistId = v1();
//
//     let newTodolistTitle = "New Todolist";
//
//     const startState: Array<TodolistType> = [
//         {id: todolistId, title: "What to learn", filter: "all"},
//         {id: todolistId, title: "What to buy", filter: "all"}
//     ]
//
//     const endState = todolistsReducer(startState, addTodolistAC(newTodolistTitle))
//
//     expect(endState.length).toBe(3);
//     expect(endState[2].title).toBe(newTodolistTitle);
// });
//
//
// test('correct todolist should change its name', () => {
//     let todolistId = v1();
//     let todolistId = v1();
//
//     let newTodolistTitle = "New Todolist";
//
//     const startState: Array<TodolistType> = [
//         {id: todolistId, title: "What to learn", filter: "all"},
//         {id: todolistId, title: "What to buy", filter: "all"}
//     ]
//
//     const action = {
//         type: 'CHANGE-TODOLIST-TITLE',
//         id: todolistId,
//         title: newTodolistTitle
//     };
//
//     const endState = todolistsReducer(startState, changeTodolistTitleAC( todolistId, newTodolistTitle));
//
//     expect(endState[0].title).toBe("What to learn");
//     expect(endState[1].title).toBe(newTodolistTitle);
// });
//
//
// test('correct filter of todolist should be changed', () => {
//     let todolistId = v1();
//     let todolistId = v1();
//
//     let newFilter: FilterValuesType = "completed";
//
//     const startState: Array<TodolistType> = [
//         {id: todolistId, title: "What to learn", filter: "all"},
//         {id: todolistId, title: "What to buy", filter: "all"}
//     ]
//
//     const action = {
//         type: 'CHANGE-TODOLIST-FILTER',
//         id: todolistId,
//         filter: newFilter
//     };
//
//     const endState = todolistsReducer(startState, changeFilterAC(todolistId,newFilter ));
//
//     expect(endState[0].filter).toBe("all");
//     expect(endState[1].filter).toBe(newFilter);
// });
//
//
//
//
//
//
//
//
//





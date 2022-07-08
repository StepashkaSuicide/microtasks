import React, {useState} from 'react';
import './App.css';
import {TodoList, TaskType} from './TodoList';
import {v1} from 'uuid';
import {Input} from './Input';
import AppBar from '@material-ui/core/AppBar/AppBar';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import {Menu} from '@material-ui/icons';
import {Typography} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// CRUD
// create +
// read ++
// update +
// delete +

type TodoListType = {
    id: string
    title: string
    filter: FilterValuesType
}

type TaskStateType = {
    [todolistID: string]: Array<TaskType>
}

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
    //BLL:
    const todolistID_1 = v1()
    const todolistID_2 = v1()
    const [todolists, setTodolists] = useState<Array<TodoListType>>([
        {id: todolistID_1, title: 'What to learn', filter: 'all'},
        {id: todolistID_2, title: 'What to buy', filter: 'all'},
    ])
    const [tasks, setTasks] = useState<TaskStateType>({
        [todolistID_1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS/TS', isDone: true},
            {id: v1(), title: 'React', isDone: false},
        ],
        [todolistID_2]: [
            {id: v1(), title: 'Milk', isDone: false},
            {id: v1(), title: 'Bread', isDone: false},
            {id: v1(), title: 'Meat', isDone: true},
        ],
    })

    const removeTask = (taskID: string, todolistID: string) => {
        setTasks({...tasks, [todolistID]: tasks[todolistID].filter(t => t.id !== taskID)})
    }
    const addTask = (title: string, todolistID: string) => {
        const newTask: TaskType = {
            id: v1(),
            title: title,
            isDone: false
        }
        setTasks({...tasks, [todolistID]: [newTask, ...tasks[todolistID]]})
    }
    const changeTaskStatus = (taskID: string, isDone: boolean, todolistID: string) => {
        setTasks({
            ...tasks,
            [todolistID]: tasks[todolistID].map(t => t.id === taskID ? {...t, isDone: isDone} : t)
        })
    }

    const changeTodoListFilter = (filter: FilterValuesType, todolistID: string) => {
        setTodolists(todolists.map(tl => tl.id === todolistID ? {...tl, filter: filter} : tl))
    }
    const removeTodolist = (todolistID: string) => {
        setTodolists(todolists.filter(tl => tl.id !== todolistID))
        delete tasks[todolistID]
    }

    const editTodo = (todolistID: string, newTitle: string) => {
        setTodolists(todolists.map(t => t.id === todolistID ? {...t, title: newTitle} : t))
    }


    // UI:
    const todolistsComponents = todolists.map(tl => {
        let tasksForRender;
        switch (tl.filter) {
            case 'active':
                tasksForRender = tasks[tl.id].filter(t => !t.isDone)
                break
            case 'completed':
                tasksForRender = tasks[tl.id].filter(t => t.isDone)
                break
            default:
                tasksForRender = tasks[tl.id]
        }

        const editSpan = (newTitle: string, taskID: string, todolistID: string) => {
            setTasks({
                ...tasks,
                [todolistID]: tasks[todolistID].map(t => t.id === taskID ? {...t, title: newTitle} : t)
            })
        }

        return (
            <Grid item key={tl.id}>
                <Paper elevation={3} style={{padding: '20px'}}>
                    <TodoList
                        id={tl.id}
                        title={tl.title}
                        filter={tl.filter}
                        tasks={tasksForRender}
                        addTask={addTask}
                        removeTask={removeTask}
                        removeTodolist={removeTodolist}
                        changeTaskStatus={changeTaskStatus}
                        changeTodoListFilter={changeTodoListFilter}
                        editSpan={editSpan}
                        editTodo={editTodo}
                    />
                </Paper>
            </Grid>


        )
    })


    const addTodoListCallBack = (title: string) => {
        let todoID = v1()
        let newTodo: TodoListType = {id: todoID, title: title, filter: 'all'}
        setTodolists([newTodo, ...todolists])
        setTasks({...tasks, [newTodo.id]: []})
    }


    //UI:
    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar style={{justifyContent: 'space-between'}}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        Todolists
                    </Typography>
                    <Button color="inherit" variant={'outlined'}>Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{padding: '20px'}}>
                    <Input callBack={addTodoListCallBack}/>
                </Grid>
                <Grid container spacing={4}>
                    {todolistsComponents}
                </Grid>

            </Container>

        </div>
    );
}

export default App;

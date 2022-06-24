import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {Button} from './component/Button';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    todolistID: string
    filter: FilterValuesType
    title: string
    tasks: Array<TaskType>
    removeTask: (todolistID: string, taskId: string) => void
    changeFilter: (todolistID: string, value: FilterValuesType) => void
    addTask: (todolistID: string, title: string) => void
    checkBoxCallBack: (todolistID: string, id: string, checked: boolean) => void
    removeTodolist: (todolistID: string) => void
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState('')
    const [error, setError] = useState<string | null>(null)

    const addTask = () => {
        if (title.trim() === '') {
            setError('пустая строка')
            setTitle('')
        } else {
            props.addTask(props.todolistID, title.trim());
            setTitle('');
        }

    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }

    const onAllClickHandler = () => props.changeFilter(props.todolistID, 'all');
    const onActiveClickHandler = () => props.changeFilter(props.todolistID, 'active');
    const onCompletedClickHandler = () => props.changeFilter(props.todolistID, 'completed');


    const checkBoxHandler = (todolistID: string, tID: string, e: ChangeEvent<HTMLInputElement>) => {
        props.checkBoxCallBack(todolistID, tID, e.currentTarget.checked)
    }
    const onClickHandler = (todolistID: string, tID: string) => props.removeTask(props.todolistID, tID)

    const delTodoHandler = () => {
        props.removeTodolist(props.todolistID)
    }


    return <div>
        <span><button onClick={delTodoHandler}>del</button></span>
        <h3>{props.title}</h3>

        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <button onClick={addTask}>+</button>
            <span>{error}</span>
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    return <li key={t.id}>
                        <input checked={t.isDone} onChange={(e) => checkBoxHandler(props.todolistID, t.id, e)}
                               type={'checkbox'}/>
                        {/*<input type="checkbox" checked={t.isDone} onChange={(e)=>checkBoxHandler(t.id, e)}/>*/}
                        <span>{t.title}</span>
                        <Button name={'XX'} callBack={() => onClickHandler(props.todolistID, t.id)}/>
                        {/*<button onClick={ }>x</button>*/}
                    </li>
                })
            }
        </ul>
        <div>
            <Button name={'All'} callBack={onAllClickHandler}/>
            <Button name={'Active'} callBack={onActiveClickHandler}/>
            <Button name={'Completed'} callBack={onCompletedClickHandler}/>


            {/*<button onClick={ onAllClickHandler }>All</button>*/}
            {/*<button onClick={ onActiveClickHandler }>Active</button>*/}
            {/*<button onClick={ onCompletedClickHandler }>Completed</button>*/}
        </div>
    </div>
}

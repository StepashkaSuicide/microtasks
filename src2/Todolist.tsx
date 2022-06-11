import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {Button} from "./components/Button";


type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (newTitle: string) => void
}

export function Todolist(props: PropsType) {


    const [newTitle, setNewTitle] = useState('')

    const clickHandler = () => {
        props.addTask(newTitle)
        setNewTitle('')
    }

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter')
            clickHandler()
    }

    const changeFilter = (value: FilterValuesType) => {
        props.changeFilter(value)
    }

    const removeTaskHandler = (tID: string) => {
        props.removeTask(tID)
    }


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input
                value={newTitle}
                onChange={changeHandler}
                onKeyPress={onKeyPressHandler}
            />
            <Button
                name={'+'}
                callBack={clickHandler}
            />
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    return (
                        <li key={t.id}>
                            <Button name={'X'} callBack={() => removeTaskHandler(t.id)}/>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>

                        </li>
                    )
                })
            }
        </ul>
        <div>

            <Button name={'All'} callBack={() => changeFilter('all')}/>
            <Button name={'Active'} callBack={() => changeFilter('active')}/>
            <Button name={'Completed'} callBack={() => changeFilter('completed')}/>
        </div>
    </div>
}

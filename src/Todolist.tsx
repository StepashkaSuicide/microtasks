import React, {useState} from 'react';
import {FilterValuesType} from './App';
import {Button} from "./components/Button/Button";
import {Input} from "./components/Input";

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
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")

    // const addTask = () => {
    //     props.addTask(title);
    //     setTitle("");
    // }

    // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setTitle(e.currentTarget.value)
    // }
    //
    // const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    //     if (e.charCode === 13) {
    //         addTask();
    //     }
    // }


    const tsarChangeFilter = (filterValue: FilterValuesType)=> {
        props.changeFilter(filterValue);
    }


    const onClickHandler = (tID: string) => {
        props.removeTask(tID)
    }

    const addTitleHandler = () => {
        props.addTask(title)
        setTitle('')
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <Input title={title} setTitle={setTitle}  callBack={addTitleHandler}/>
            <Button name={'+'} callBack={addTitleHandler}/>
        </div>
        <ul>
            {
                props.tasks.map(t => {

                    // const onClickHandler = () => props.removeTask(t.id)

                    return <li key={t.id}>

                        <Button name={'+'} callBack={()=>onClickHandler(t.id)}/>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                    </li>
                })
            }
        </ul>
        <div>
            <Button name={'All'} callBack={()=>tsarChangeFilter('all')}/>
            <Button name={'Active'} callBack={()=>tsarChangeFilter('active')}/>
            <Button name={'Completed'} callBack={()=>tsarChangeFilter('completed')}/>

        </div>
    </div>
}

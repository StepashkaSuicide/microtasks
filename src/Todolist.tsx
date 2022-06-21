import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {Button} from './component/Button';

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
    checkBoxCallBack: (id: string, checked: boolean)=> void
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")
    const [error, setError] = useState<string | null>(null)

    const addTask = () => {
        if (title.trim()===''){
           setError('пустая строка')
            setTitle("")
        }else {
            props.addTask(title.trim());
            setTitle("");
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

    const onAllClickHandler = () => props.changeFilter("all");
    const onActiveClickHandler = () => props.changeFilter("active");
    const onCompletedClickHandler = () => props.changeFilter("completed");


    const checkBoxHandler = (tID: string, e: ChangeEvent<HTMLInputElement>) => {
        props.checkBoxCallBack(tID, e.currentTarget.checked)
    }
    const onClickHandler = (tID: string) => {
        props.removeTask(tID)
    }




    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange={ onChangeHandler }
                   onKeyPress={ onKeyPressHandler }
            />
            <button onClick={addTask}>+</button>
            <span>{error}</span>
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    return <li key={t.id}>
                        <input checked={t.isDone} onChange={(e)=>checkBoxHandler(t.id, e)}   type={'checkbox'}/>
                        {/*<input type="checkbox" checked={t.isDone} onChange={(e)=>checkBoxHandler(t.id, e)}/>*/}
                        <span>{t.title}</span>
                        <Button  name={'XX'} callBack={()=> onClickHandler(t.id)}/>
                        {/*<button onClick={ }>x</button>*/}
                    </li>
                })
            }
        </ul>
        <div>
            <Button  name={'All'} callBack={onAllClickHandler}/>
            <Button name={'Active'}callBack={onActiveClickHandler}/>
            <Button name={'Completed'}callBack={onCompletedClickHandler}/>


            {/*<button onClick={ onAllClickHandler }>All</button>*/}
            {/*<button onClick={ onActiveClickHandler }>Active</button>*/}
            {/*<button onClick={ onCompletedClickHandler }>Completed</button>*/}
        </div>
    </div>
}

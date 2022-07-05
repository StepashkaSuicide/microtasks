import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type InputType = {
    callBack: (title: string) => void
}
export const Input = (props: InputType) => {
    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<boolean>(false)


    const addTask = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.callBack(trimmedTitle)
        } else {
            setError(true)
        }
        setTitle('')
    }
    const onKeyDownAddTask = (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && addTask()
    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        error && setError(false)
    }
    return (
        <div>
            <input
                value={title}
                onChange={onChangeSetTitle}
                onKeyDown={onKeyDownAddTask}
                className={error ? 'error' : ''}
            />
            <button onClick={addTask}>+</button>
            {error && <div style={{color: 'red'}}>Title is required!</div>}
        </div>
    )

}
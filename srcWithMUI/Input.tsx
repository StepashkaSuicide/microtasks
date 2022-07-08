import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {TextField} from '@material-ui/core';

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

            <TextField value={title}
                       onChange={onChangeSetTitle}
                       onKeyDown={onKeyDownAddTask}
                       size={'small'}
                       label={'Title'}
                       error={error}
                       helperText={error && 'Title is required!'}
                       id="filled-basic" variant="outlined"
            />

            <IconButton onClick={addTask}> <AddCircleIcon color={'primary'} fontSize={'small'}/></IconButton>

        </div>
    )

}
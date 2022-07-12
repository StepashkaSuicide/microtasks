import React, {ChangeEvent} from 'react';


type CheckBoxType = {
    callBack: (isDone: boolean) => void
    isDone: boolean

}


export const CheckBox = (props: CheckBoxType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        props.callBack(newIsDoneValue)
        // props.changeTaskStatus(t.id, newIsDoneValue, props.id);
    }
    return (
        <div>
            <input type="checkbox" onChange={onChangeHandler} checked={props.isDone}/>
        </div>
    );
};

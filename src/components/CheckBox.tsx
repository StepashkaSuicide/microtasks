import React, {ChangeEvent} from 'react';


type CheckBoxType = {
    checked: boolean
    callBack: (eventValue: boolean) => void
}

export const CheckBox = (props: CheckBoxType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>)=> {
        props.callBack(e.currentTarget.checked)
    }

    return (
        <input type="checkbox" checked={props.checked}
               onChange={onChangeHandler}/>
               // onChange={(e) => changeCheckBoxHandler(t.id, e.currentTarget.checked)}
    );
};


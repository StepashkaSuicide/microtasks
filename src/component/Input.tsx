import React, {ChangeEvent} from 'react';


type inputType = {
    type: string
    callBack: (tID: string, e: ChangeEvent<HTMLInputElement>) => void


}

export const Input = (props: inputType) => {
    return (
        <input type={props.type} />
    )
}
// };<input type="checkbox" checked={props.checked} onChange={(e)=>checkBoxHandler(t.id, e)}/>
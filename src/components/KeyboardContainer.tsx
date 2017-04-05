import * as React from "react";
import {Button} from "./dumpComponents";


interface IKeyboardProps {

}

interface IKeyboardStates{

}

class KeyboardContainer extends React.Component<IKeyboardProps, IKeyboardStates>{
    constructor(props: IKeyboardProps){
        super(props);
    }

    render(){
        return (
            <div>
                <Button/>
            </div>
        )
    }

}

export default KeyboardContainer;
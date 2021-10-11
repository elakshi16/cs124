import React, {useState} from "react";

function AddTask(props) {
    const [text, setText] = useState(null);
    return <div>
        <form>
            <input type="text" value = {text}/>
            <input type="submit" onClick={e => props.onAddTask({title: {text}, id:"123"})}/>
        </form>
    </div>
}

export default AddTask;
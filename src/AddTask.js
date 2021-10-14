import React, {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import './AddTask.css';

function generateId(currentId) {
    return currentId ++;
}


function AddTask(props) {
    const [text, setText] = useState("");
    console.log("in addTask");

    function clickHandler(e, task){
        props.onAddTask(task)
        setText("")
    }

    return <div className={'fullAdd'}>
            <input id="taskTextField" type="text" id ={generateUniqueID()} value={text} onChange={e => setText(e.target.value)} placeholder="Enter new task here"/>
            <button onClick={(e) => clickHandler(e, text)}> + </button>
    </div>
}

export default AddTask;
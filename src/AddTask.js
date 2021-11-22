import React, {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import './AddTask.css';

function AddTask(props) {
    const [text, setText] = useState("");

    function clickHandler(task){
        props.onAddTask(task)
        setText("")
    }

    return <div className={'fullAdd'}>
            <input className="taskTextField" type="text" id ={generateUniqueID()} value={text} onChange={e => setText(e.target.value)} placeholder="Enter new task here"/>
            <button className={'plus'} onClick={(e) => clickHandler(text)}> + </button>
    </div>
}

export default AddTask;
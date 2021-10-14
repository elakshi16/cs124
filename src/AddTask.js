import React, {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

function generateId(currentId) {
    return currentId ++;
}

function AddTask(props) {
    const [text, setText] = useState("");
    console.log("in addTask");
    return <div>
            <input type="text" id ={generateUniqueID()} value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter new task here"/>
            <button onClick={e => props.onAddTask(text)}> + </button>
    </div>
}

export default AddTask;
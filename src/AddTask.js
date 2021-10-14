import React, {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

function generateId(currentId) {
    return currentId ++;
}


function AddTask(props) {
    const [text, setText] = useState("");
    console.log("in addTask");

    function changeHandler(e){
        setText(e.target.value)
        // document.getElementById("taskTextField").value.reset()
    }

    return <div>
            <input id="taskTextField" type="text" id ={generateUniqueID()} value={text} onChange={e => setText(e.target.value)} placeholder="Enter new task here"/>
            <button onClick={(e) => props.onAddTask(text)}> + </button>
    </div>
}

export default AddTask;
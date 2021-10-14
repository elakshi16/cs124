import React, {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

function generateId(currentId) {
    return currentId ++;
}

function AddTask(props) {
    const [text, setText] = useState("");
    console.log("in addTask");
    return <div>
        <form>
            <input type="text" id ={generateUniqueID()} value={text} placeholder="Enter new task here"/>
            <input type="submit" value = "+" onClick={e => props.onAddTask(text)}/>
        </form>
    </div>
}

export default AddTask;
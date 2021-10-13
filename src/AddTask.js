import React, {useState} from "react";

function generateId(currentId) {
    return currentId ++;
}

function AddTask(props) {
    const [text, setText] = useState(null);
    const [id, setId] = useState(0);
    return <div>
        <form>
            <input type="text" id ={id} value={text} placeholder="Enter new task here"/>
            <input type="submit" value = "+" onClick={e => props.onAddTask(text)}/>
        </form>
    </div>
}

export default AddTask;
import React from 'react';
import './Task.css';

function Task(props) {
    console.log("in Task");
    return <div key={props.id}>
        <div className={(props.completed) ? "completed" : "incomplete"}>
            <input type="checkbox" onClick={props.toggleComplete}/>
            <p contentEditable="true">{props.taskText}</p>
        </div>
    </div>
}

export default Task;
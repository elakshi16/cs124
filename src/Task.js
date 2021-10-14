import React from 'react';
import './Task.css';

function Task(props) {
    console.log("in Task");
    return <div key={props.id}>
        <div className={(props.completed) ? "completed" : "incomplete"}>
            <input type="checkbox" onClick={props.onRowClick(props.id)}/>
            <p contentEditable="true">{props.taskText}</p>
        </div>
    </div>
}

export default Task;
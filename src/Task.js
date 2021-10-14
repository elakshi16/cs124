import React from 'react';
import './Task.css';

function Task(props) {
    console.log("in Task");
    return <div key={props.id}>
        <div id="task" className={(props.completed) ? "completed" : "incomplete"}>
            <input type="checkbox" className="check" onClick={props.toggleComplete }/>
            <p className={'writing'} contentEditable="true">{props.taskText}</p>
        </div>
    </div>
}

export default Task;
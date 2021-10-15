import React from 'react';
import './Task.css';

function Task(props) {
    console.log("in Task");
    console.log(props.completed);


    return <div key={props.id}>
        <div id="task">
            <input type="checkbox" className="check" checked={props.completed} onClick={e => props.onTaskFieldChange(props.id, "completed",e.target.checked)}/>
            <input type="text" value={props.text} className={'writing'} onChange={e => props.onTaskFieldChange(props.id, "text",e.target.value)}/>
            <button className={"deleteButton"} onClick={e => props.onDeleteTask(props.id)}>Delete</button>
        </div>

    </div>
}

export default Task;
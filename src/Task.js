import React from 'react';

function Task(props) {
    console.log("in Task");
    return <div key={props.id}>
        <div className="taskText">
            <input type="checkbox"/>
            <p contentEditable="true">{props.taskText}</p>
        </div>
    </div>
}

export default Task;
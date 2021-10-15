import React from 'react';
import './Task.css';

function Task(props) {
    console.log("in Task");
    console.log(props.completed);


    return <div key={props.id}>
        <div id="task">
            <input type="checkbox" className="check" defaultChecked={props.elem.completed} onClick={props.toggleComplete}/>
            <p className={'writing'} contentEditable="true">{props.taskText}</p>
            <button className={"deleteButton"} onClick={e => props.onDeleteTask(props.elem.id)}>Delete</button>
        </div>

    </div>
}

export default Task;
import React from 'react';
import './Task.css';

function Task(props) {

    return <div key={props.id}>
        <div id="task">
            <input type="checkbox" className="check" checked={props.completed} onChange={e => props.onTaskFieldChange(props.id, "completed",e.target.checked)}/>
            <input type="text" value={props.text} className={'writing'} onChange={e => props.onTaskFieldChange(props.id, "title",e.target.value)}/>
            <div id={"priority"}>
                <button className={props.priority >= 1 ? "filled" : "empty"} onClick={e => props.onTaskFieldChange(props.id, "priority", 1)}/>
                <button className={props.priority >= 2 ? "filled" : "empty"} onClick={e => props.onTaskFieldChange(props.id, "priority", 2)}/>
                <button className={props.priority >= 3 ? "filled" : "empty"} onClick={e => props.onTaskFieldChange(props.id, "priority", 3)}/>
            </div>
            <button className={"deleteButton"} onClick={e => props.onDeleteTask([props.id])}>Delete</button>
        </div>

    </div>
}

export default Task;
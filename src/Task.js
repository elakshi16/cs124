import React from 'react';
import './Task.css';

function Task(props) {

    return <div key={props.id}>
        <div id="task">
            <div id={"beginGroup"}>
                <input type="checkbox" className="check" checked={props.completed} onChange={e => props.onTaskFieldChange(props.id, "completed",e.target.checked)}/>
                <input type="text" value={props.text} className={'writing'} onChange={e => props.onTaskFieldChange(props.id, "title",e.target.value)}/>
            </div>
            <div id={"endGroup"}>
                <div id={"priority"}>
                    <button aria-label={"low priority"} role={"checkbox"} aria-checked={props.priority >= 1 ? "true" : "false"} className={props.priority >= 1 ? "filled" : "empty"} onClick={e => props.onTaskFieldChange(props.id, "priority", 1)}/>
                    <button aria-label={"middle priority"} role={"checkbox"} aria-checked={props.priority >= 2 ? "true" : "false"} className={props.priority >= 2 ? "filled" : "empty"} onClick={e => props.onTaskFieldChange(props.id, "priority", 2)}/>
                    <button aria-label={"high priority"} role={"checkbox"} aria-checked={props.priority >= 3 ? "true" : "false"} className={props.priority >= 3 ? "filled" : "empty"} onClick={e => props.onTaskFieldChange(props.id, "priority", 3)}/>
                </div>
                <button className={"deleteButton"} onClick={e => props.onDeleteTask([props.id])}>Delete</button>
            </div>
        </div>

    </div>
}

export default Task;
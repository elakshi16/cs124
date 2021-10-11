import React from 'react';

function Task(props) {
    return <div>
        <div>CHECKBOX</div>
        <div>{props.title}</div>
        <div>edit</div>
        <div>delete</div>
    </div>
}

export default Task;
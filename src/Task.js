import React from 'react';

function Task(props) {
    return <div key={props.key}>
        <div className="taskText"><input type="checkbox">{props.taskText}</input></div>
        <div className="editButton"><button>Edit</button></div>
        <div className="deleteButton"><button>Delete</button></div>
    </div>
}

export default Task;
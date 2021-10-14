import React from 'react';

function Task(props) {
    console.log("in Task");
    return <div key={props.id}>
        <div className="taskText"><input type="checkbox"/>{props.taskText}</div>
        <div className="editButton"><button>Edit</button></div>
        <div className="deleteButton"><button>Delete</button></div>
    </div>
}

export default Task;
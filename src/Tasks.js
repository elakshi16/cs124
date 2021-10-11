import Task from'./Task';
import React from 'react';

function Tasks(props) {
    return <div>
        {props.list.map(a => <Task/>)}
    </div>
}

export default Tasks;
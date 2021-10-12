import Task from'./Task';
import React from 'react';

function Tasks(props) {
    return <div>
        {props.list.map(elem => <Task key={elem.id} taskText={elem.title}/>)}
    </div>
}

export default Tasks;
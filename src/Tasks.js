import Task from'./Task';
import React, {useState} from "react";
import './Tasks.css';

function Tasks(props) {
    return (<div className={'Tasks'}>
        {props.list.map(elem => <div>
                                    <Task
                                        id = {elem.id}
                                        onTaskFieldChange={props.onTaskFieldChange}
                                        className='Task'
                                        onDeleteTask={props.onDeleteTask}
                                      text={elem.title} {...elem}/>
                                </div>)}
    </div>);
}

export default Tasks;
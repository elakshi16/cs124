import Task from'./Task';
import React, {useState} from "react";
import './Tasks.css';

function Tasks(props) {
    console.log()

    return (<div className={'Tasks'}>
        {props.list.map(elem => <div>
                                    <Task //toggleComplete={switchComplete(elem.id)}
                                        id = {elem.id}
                                        onTaskFieldChange={props.onTaskFieldChange}
                                        className='Task'
                                        onDeleteTask={props.onDeleteTask}
                                      text={elem.title} {...elem}/>
                                </div>)}
    </div>);
}

export default Tasks;
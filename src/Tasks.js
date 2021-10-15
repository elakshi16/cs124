import Task from'./Task';
import React, {useState} from "react";
import './Tasks.css';

function Tasks(props) {

    return (<div className={'Tasks'}>
        {props.list.map(elem => <div>
                                    <Task //toggleComplete={switchComplete(elem.id)}
                                        elem = {elem}
                                        toggleComplete={(elem) => elem.completed = !elem.completed}
                                        className='Task'
                                        onDeleteTask={props.onDeleteTask}
                                      taskText={elem.title} {...elem}/>
                                    {/*<div className="editButton"><button onClick={e => toggleEdit()}>Edit</button></div>*/}
                                </div>)}
    </div>);
}

export default Tasks;
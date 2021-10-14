import Task from'./Task';
import React, {useState} from "react";
import './Tasks.css';

function Tasks(props) {
    const [completedId, setCompletedId] = useState([]);
    console.log("in Tasks");
    console.log("completedTasks:" + completedId)

    // function toggleEdit(){
    //
    // }

    function switchComplete(id){
        if (completedId.includes(id)){
            setCompletedId(completedId.remove(id))
        }
        else{
            setCompletedId(completedId.push(id))
        }
    }

    return (<div className={'Tasks'}>
        {props.list.map(elem => <div  className={'fullTask'}>
                                    <Task //toggleComplete={switchComplete(elem.id)}
                                        className={'Task'}
                                        completed={completedId.includes(elem.id)}
                                      key={elem.id}
                                      taskText={elem.title} {...elem}/>
                                    {/*<div className="editButton"><button onClick={e => toggleEdit()}>Edit</button></div>*/}
                                    <div className={'fullButton'}><button className={"deleteButton"} onClick={e => props.onDeleteTask(elem.id)}>Delete</button></div>
                                </div>)}
        {completedId.length >1 && <button >Show Incomplete Tasks</button>}
    </div>);
}

export default Tasks;
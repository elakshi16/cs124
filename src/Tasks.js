import Task from'./Task';
import React, {useState} from "react";

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

    return (<div>
        {props.list.map(elem => <div>
                                    <Task toggleComplete={switchComplete(elem.id)}
                                      completed={completedId.includes(elem.id)}
                                      key={elem.id}
                                      taskText={elem.title} {...elem}/>
                                    {/*<div className="editButton"><button onClick={e => toggleEdit()}>Edit</button></div>*/}
                                    <div className="deleteButton"><button onClick={e => props.onDeleteTask(elem.id)}>Delete</button></div>
                                </div>)}
        {completedId.length >1 && <button >Show Incomplete Tasks</button>}
    </div>);
}

export default Tasks;
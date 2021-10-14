import Task from'./Task';
import React, {useState} from "react";

function Tasks(props) {
    const [completedId, setCompletedId] = useState([]);
    console.log("in Tasks");
    console.log("completedTasks:" + completedId)

    // function toggleEdit(){
    //
    // }

    return (<div>
        {props.list.map(elem => <div>
                                    <Task onRowClick={(id) => setCompletedId(completedId.push(id))}
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
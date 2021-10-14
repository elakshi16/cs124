import Task from'./Task';
import React, {useState} from "react";

function Tasks(props) {
    const [completedId, setCompletedId] = useState([]);
    console.log("in Tasks");
    return (<div>
        {props.list.map(elem => <div>
                                    <Task onRowClick={(id) => setCompletedId(completedId.append(id))}
                                      completed={elem.id in completedId}
                                      key={elem.id}
                                      taskText={elem.title} {...elem}/>
                                    <div className="editButton" ><button>Edit</button></div>
                                    <div className="deleteButton"><button onClick={e => props.onDeleteTask(elem.id)}>Delete</button></div>
                                </div>)}
    </div>);
}

export default Tasks;
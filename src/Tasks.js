import Task from'./Task';
import React, {useState} from "react";

function Tasks(props) {
    const [completedId, setCompletedId] = useState([]);
    return (<div>
        {props.list.map(elem => <Task onRowClick={(id) => setCompletedId(completedId.append(id))} completed={elem.id in completedId} key={elem.id} taskText={elem.title} {...elem}/>)}
    </div>);
}

export default Tasks;
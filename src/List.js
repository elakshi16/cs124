import React, {useState} from "react";
import Sorting from "./Sorting";
import Tasks from "./Tasks";
import AddTask from "./AddTask";

import './List.css';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

import firebase from "firebase/compat";
import {useCollection} from "react-firebase-hooks/firestore";




function List(props) {
    const tasksQuery = props.db.collection("Lists/"+ props.selectedListId + "/Tasks")

    const [field, setField] = useState("creationDate")
    const [direction, setDirection] = useState("desc")
    const [value, loading, error] = useCollection(tasksQuery.orderBy(field, direction));

    const taskArray = [];

    if (value) {
        for (let i=0; i<value.docs.length; i++) {
            taskArray[i] = value.docs[i].data();
        }
    }

    const [showCompleted, setShowCompleted] = useState(true);
    const filteredList = taskArray.filter((task) => showCompleted || !task.completed);

    function handleAddTask(taskName) {
        const task = {id:generateUniqueID(), title:taskName, priority:0, creationDate:Date.toLocaleString()};
        tasksQuery.doc(task.id).set(task);
    }

    function handleTaskFieldChange(taskId, field, newVal) {
        const updateTask = {[field]:newVal };
        console.log(field, newVal);
        tasksQuery.doc(taskId).update(updateTask);
    }

    function handleDeleteTasks(deletedIds) {
        for (let i=0; i < deletedIds.length; i++){
            tasksQuery.doc(deletedIds[i]).delete();
        }
    }

    function sortBy(field, direction) {
        setField(field)
        setDirection(direction)
    }



    return (<div className={'App'}>
            {loading && <p>Page is loading</p>}
            {error && <p>Error loading page</p>}

            <AddTask className={'addTask'}
                     onAddTask={handleAddTask}/>
            <Sorting classname={"sort"} onSelection={sortBy}/>
            <Tasks className={'Tasks'} list={filteredList} onTaskFieldChange={handleTaskFieldChange}
                   onDeleteTask={handleDeleteTasks}/>
            <div className={'endButtons'}>
                {/*follow directions for delete task but apply to all, don't filter anything out*/}
                <button className={'largeButton'} onClick={e => handleDeleteTasks(filteredList.map((task) => task.id))}>Delete All</button>
                <button className="largeButton"
                        onClick={e => setShowCompleted(!showCompleted)}> {showCompleted ? "Hide Complete Tasks" : "Show All Tasks"}</button>
                <button className="largeButton"
                        onClick={e => props.onUnselectListId(0)}> Back to List Catalog</button>
            </div>
        </div>
    );
}

export default List;

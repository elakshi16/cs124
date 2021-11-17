import React, {useState} from "react";
import Sorting from "./Sorting";
import Tasks from "./Tasks";
import AddTask from "./AddTask";
import List from "./List";
import Lists from "./Lists"

import './App.css';

import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import firebase from "firebase/compat";
import {useCollection} from "react-firebase-hooks/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDeSrL-YstSATx0OqeATHzUBttu5Qxz9tM",
    authDomain: "task-app-34b9f.firebaseapp.com",
    projectId: "task-app-34b9f",
    storageBucket: "task-app-34b9f.appspot.com",
    messagingSenderId: "982606058122",
    appId: "1:982606058122:web:ffce85d25a8dfd5c38d373",
    measurementId: "G-039RP6Z1B1"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

function App() {
    const name = "Tasks";
    const query = db.collection(name);

    const [field, setField] = useState("title")
    const [direction, setDirection] = useState("asc")
    const [value, loading, error] = useCollection(query.orderBy(field, direction));

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
        query.doc(task.id).set(task);
    }

    function handleTaskFieldChange(taskId, field, newVal) {
        const updateTask = {[field]:newVal };
        console.log(field, newVal);
        query.doc(taskId).update(updateTask);
    }

    function handleDeleteTasks(deletedIds) {
        for (let i=0; i < deletedIds.length; i++){
            query.doc(deletedIds[i]).delete();
        }
    }

    function sortBy(field, direction) {
        setField(field)
        setDirection(direction)
    }



    return (<div className={'App'}>
            {loading && <p>Page is loading</p>}

            <h1>Checklist App</h1>
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
            </div>
            <div>
                <button>Add List</button>
                <List/>
                <Lists/>
            </div>
        </div>
    );
}

export default App;

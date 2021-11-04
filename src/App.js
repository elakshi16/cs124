import './App.css';
import Tasks from "./Tasks";
import React, {useState} from "react";
import AddTask from "./AddTask";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import firebase from "firebase/compat";
import {useCollection} from "react-firebase-hooks/firestore";

// const initialData = []

const firebaseConfig = {
    apiKey: "AIzaSyCd9qqxvMpEKpBzwfWcc2tlRFa6ICaLH_s",
    authDomain: "hmc-cs124-fa21-labs.firebaseapp.com",
    projectId: "hmc-cs124-fa21-labs",
    storageBucket: "hmc-cs124-fa21-labs.appspot.com",
    messagingSenderId: "949410042946",
    appId: "1:949410042946:web:0113b139a7e3cd1cc709db"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

function App() {
    const name = "elakshi16-tasks";
    const collection = db.collection(name);
    const query = collection;
    const [value, loading, error] = useCollection(collection);

    const taskArray = [];
    // const showCompleted = true;
    if (value) {
        for (let i=0; i<value.docs.length; i++) {
            taskArray[i] = value.docs[i].data();
        }
    }

    // const [data, setData] = useState(initialData);
    const [showCompleted, setShowCompleted] = useState(true);
    const filteredList = taskArray.filter((task) => showCompleted || !task.completed);

    function handleAddTask(taskName) {
        // setData(data.concat([{id: generateUniqueID(), title: task}]));

        const task = {id:generateUniqueID(), title:taskName, priority:0, creationDate:Date.toLocaleString()};
        collection.doc(task.id).set(task);
    }

    function handleTaskFieldChange(taskId, field, newVal) {
        // if (field === "title") {
        //     setData(data.map(elem => elem.id === id ? {...elem, title: newVal} : elem));
        //
        // }
        // if (field === "completed") {
        //     setData(data.map(elem => elem.id === id ? {...elem, completed: newVal} : elem));
        //
        // }

        const updateTask = {[field]:newVal };
        console.log(field, newVal);
        collection.doc(taskId).update(updateTask);
    }

    function handleDeleteTasks(deletedIds) {
        // setData(data.filter(task => task.id !== deletedId));
        for (let i=0; i < filteredList.length; i++){
            collection.doc(deletedIds[i]).delete();
        }
    }




    return (<div className={'App'}>
            {loading && <p>Page is loading</p>}

            <h1>Checklist App</h1>
            <AddTask className={'addTask'}
                     onAddTask={handleAddTask}/>
            <Tasks className={'Tasks'} list={filteredList} onTaskFieldChange={handleTaskFieldChange}
                   onDeleteTask={handleDeleteTasks}/>
            <div className={'endButtons'}>
                {/*follow directions for delete task but apply to all, don't filter anything out*/}
                <button className={'largeButton'} onClick={e => handleDeleteTasks(filteredList.map((task) => task.id))}>Delete All</button>
                <button className="largeButton"
                        onClick={e => setShowCompleted(!showCompleted)}> {showCompleted ? "Hide Complete Tasks" : "Show All Tasks"}</button>
            </div>
        </div>
    );
}

export default App;

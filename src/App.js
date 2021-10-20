import './App.css';
import Tasks from "./Tasks";
import React, {useState} from "react";
import AddTask from "./AddTask";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import firebase from "firebase/compat";
import {useCollection} from "react-firebase-hooks/firestore";

const initialData = []

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

    if (value) {

    }

    const [data, setData] = useState(initialData);
    const [showCompleted, setShowCompleted] = useState(true);
    let filteredList = data.filter((task) => showCompleted || !task.completed);

    function handleAddTask(task) {
        setData(data.concat([{id: generateUniqueID(), title: task}]));
    }

    function handleTaskFieldChange(id, field, newVal) {
        if (field === "title") {
            setData(data.map(elem => elem.id === id ? {...elem, title: newVal} : elem));

        }
        if (field === "completed") {
            setData(data.map(elem => elem.id === id ? {...elem, completed: newVal} : elem));

        }
    }

    function handleDeleteTask(deletedId) {
        setData(data.filter(task => task.id !== deletedId));
    }


    return (<div className={'App'}>
            {loading && <p>Page is loading</p>}

            <h1>Checklist App</h1>
            <AddTask className={'addTask'}
                     onAddTask={handleAddTask}/>
            <Tasks className={'Tasks'} list={filteredList} onTaskFieldChange={handleTaskFieldChange}
                   onDeleteTask={handleDeleteTask}/>
            <div className={'endButtons'}>
                <button className={'largeButton'} onClick={e => setData([])}>Delete All</button>
                <button className="largeButton"
                        onClick={e => setShowCompleted(!showCompleted)}> {showCompleted ? "Hide Complete Tasks" : "Show All Tasks"}</button>
            </div>
        </div>
    );
}

export default App;

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
    const name = "Lists";
    const query = db.collection(name);

    const [field, setField] = useState("creationDate")
    const [direction, setDirection] = useState("desc")
    const [value, loading, error] = useCollection(query.orderBy(field, direction));

    const taskArray = [];
    const listArray = [];

    if (value) {
        for (let i=0; i<value.docs.length; i++) {
            taskArray[i] = value.docs[i].data();
        }
    }

    return (<div className={'App'}>
            {loading && <p>Page is loading</p>}

            <h1>Checklist App</h1>
            <List/>
            <div className={'endButtons'}>
                <button className={'largeButton'}>Add List</button>
            </div>
        </div>
    );
}

export default App;

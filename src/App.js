import React, {useState} from "react";
import Sorting from "./Sorting";
import Tasks from "./Tasks";
import AddTask from "./AddTask";
import List from "./List";
import Lists from "./Lists";


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
    const listArray = [];
    const [selectedListId, setSelectedListId] = useState(0)

    function handleAddList(){
        listArray.push(generateUniqueID())
    }


    return (<div className={'App'}>

            <h1 aria-label={"Checklist App"}>Checklist App</h1>
            {!selectedListId && <Lists db={db} onSelectListId={setSelectedListId}/>}
            {selectedListId && <List db={db}/>}
            <div className={'endButtons'}>
                <button className={'largeButton'} onClick={handleAddList}>Add List</button>
            </div>
        </div>
    );
}

export default App;

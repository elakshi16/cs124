import React, {useState} from "react";
import firebase from "firebase/compat";
import List from "./List";
import Lists from "./Lists";
import './App.css';

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

    return (<div className={'App'}>
            <h1 aria-label={"Checklist App"}>Checklist App</h1>
            {selectedListId ? <List db={db} onUnselectListId={setSelectedListId} selectedListId={selectedListId}/>: <Lists db={db} listArray = {listArray} onSelectListId={setSelectedListId} />}
        </div>
    );
}

export default App;

import React, {useState} from "react";
import Sorting from "./Sorting";
import Tasks from "./Tasks";
import AddTask from "./AddTask";
import List from "./List";


import './App.css';

import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

import firebase from "firebase/compat";
import {useCollection} from "react-firebase-hooks/firestore";


function App() {
    const listArray = [];

    function handleAddList(){
        listArray.push(generateUniqueID())
    }


    return (<div className={'App'}>

            <h1 aria-label={"Checklist App"}>Checklist App</h1>
            {/*<Lists listList={listArray}/>*/}
            <List/>
            <div className={'endButtons'}>
                <button className={'largeButton'} onClick={handleAddList}>Add List</button>
            </div>
        </div>
    );
}

export default App;

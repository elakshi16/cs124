import List from'./List';
import React, {useState} from "react";
import Task from "./Task";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import {useCollection} from "react-firebase-hooks/firestore";

function Lists(props) {
    const [value,loading,error] = useCollection(props.db.collection("Lists"));
    const listArray = [];

    if (value) {
        for (let i=0; i<value.docs.length; i++) {
            listArray[i] = value.docs[i].data();
        }
    }

    function addList(){
        const id=generateUniqueID;
        props.onSelectListId(id);
    }

    return (<div className={'Tasks'}>
        <button onClick={e => addList}>Add List</button>
        {/*loading, error cases*/}
        {value.map(elem => <div>
            <button> List {elem}</button>
        </div>)}
    </div>);
}

export default Lists;
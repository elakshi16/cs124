import List from'./List';
import React, {useState} from "react";
import Task from "./Task";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import {useCollection} from "react-firebase-hooks/firestore";

function Lists(props) {
    const query = props.db.collection("Lists");
    const [value,loading,error] = useCollection(query);

    if (value) {
        for (let i=0; i<value.docs.length; i++) {
            props.listArray[i] = value.docs[i].data();
        }
    }

    function handleAddList(){
        const list = {id:generateUniqueID()};
        query.doc(list.id).set(list);
        props.listArray.push(list);
        props.onSelectListId(list.id);
    }

    return (<div className={'Tasks'}>
        {loading && <p>Page is loading</p>}
        {error && <p>Error loading page</p>}
        {props.listArray.map(elem => <div>
            <button onClick={e => props.onSelectListId(elem.id)}> List {elem.id}</button>
        </div>)}
        <div className={'endButtons'}>
            <button className={'largeButton'} onClick={handleAddList}>Add List</button>
        </div>
    </div>);
}

export default Lists;
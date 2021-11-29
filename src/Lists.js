import List from'./List';
import React, {useState} from "react";
import Task from "./Task";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

function Lists(props) {
    console.log(props.db.values);

    function addList(){
        const id=generateUniqueID;
        props.onSelectListId(id);
    }

    return (<div className={'Tasks'}>
        <button onClick={e => addList}>Add List</button>
        {props.db.values.map(elem => <div>
            <button> List {elem}</button>
        </div>)}
    </div>);
}

export default Lists;
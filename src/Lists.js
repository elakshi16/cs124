import List from'./List';
import React, {useState} from "react";
import './Tasks.css';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";


function Lists(props) {
    const query = db.collection("Lists");



    console.log(props.listList)
    return (<div className={'Tasks'}>
        {props.listList.map(elem => <div>
            <List doc = {query.doc(elem)}/>
        </div>)}
    </div>);
}

export default Lists;
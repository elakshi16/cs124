import List from'./List';
import React, {useState} from "react";
import './Tasks.css';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

function Lists(props) {
    return (<div className={'Tasks'}>
        {props.listList.map(elem => <div>
            <List id = {elem}/>
        </div>)}
    </div>);
}

export default Lists;
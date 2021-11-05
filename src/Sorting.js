import React from "react";
import './Sorting.css';

function Sorting(props) {
    return (<div className={'Sorting'}>
        <p>Sort by: </p>
        <div id={'sortButton'}>
            <button className={'sortTon'} onClick={e => props.onSelection('creationDate', 'desc')}>Creation Date</button>
            <button className={'sortTon'} onClick={e => props.onSelection('title', 'asc')}>Name</button>
            <button className={'sortTon'} onClick={e => props.onSelection('priority', 'desc')}>Priority</button>
        </div>
    </div>);
}

export default Sorting;
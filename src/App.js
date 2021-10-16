import './App.css';
import Tasks from "./Tasks";
import React, {useState} from "react";
import AddTask from "./AddTask";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

const initialData = []

function App() {
  const [data, setData] = useState(initialData);
  const [showCompleted, setShowCompleted] = useState(true);
  let filteredList = data.filter((task) => showCompleted || !task.completed);

  function handleTaskFieldChange(id,field,newVal){
      if (field === "title"){
          setData(data.map(elem => elem.id === id? {...elem, title: newVal}: elem))

      }
      if (field === "completed"){
          setData(data.map(elem => elem.id === id? {...elem, completed: newVal}: elem))

      }
  }

  return (<div className={'App'}>
          <h1>Checklist App</h1>
          <AddTask className={'addTask'} onAddTask={(text) => setData(data.concat([{id: generateUniqueID(), title: text}]))}/>
        <Tasks className={'Tasks'} list={filteredList} onTaskFieldChange={handleTaskFieldChange} onDeleteTask = {(deletedId) => setData(data.filter(task => task.id !== deletedId))}/>
          <div className={'endButtons'}>
              <button className={'largeButton'} onClick={e => setData([])}>Delete All</button>
              <button className="largeButton" onClick={e => setShowCompleted(!showCompleted)}> {showCompleted? "Hide Complete Tasks": "Show All Tasks"}</button>
          </div>
      </div>
  );
}

export default App;

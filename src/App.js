import './App.css';
import Tasks from "./Tasks";
import React, {useState} from "react";
import AddTask from "./AddTask";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

const initialData = [
  {
    title: "do something",
    id: "123",
    completed: true
  },
  {
    title: "do dishes",
    id: "124",
    completed: false
  }
]
 // some toggleCompleted (similar to handleFieldChanged in People)
function App() {
  const [data, setData] = useState(initialData);
  const [visibility, setVisibility] = useState(true);
  console.log(data);
  let filteredList = data.filter((task) => visibility || !task.completed);
  console.log("in app");
  //
  // function toggleVisibility(){
  //     data.map(elem =>(elem.completed)? :)]
  //
  //     function myFunction() {
  //         var x = document.getElementById("myDIV");
  //         if (x.style.display === "none") {
  //             x.style.display = "block";
  //         } else {
  //             x.style.display = "none";
  //         }
  //     }
  // }

    function handleTaskFieldChange(taskid,field,newVal){
        if (field === "text"){
            setData(data.map(elem => elem.id === taskid? elem.field = newVal: ""))
        }
        if (field === "completed"){
            setData()
        }
    }
// pass in all of data, but also pass in showCompleted (visibility) and tasks would filter things out
    // or app does filterning and only passes the filtered list into tasks
  return (<div className={'App'}>
          <h1>Checklist App</h1>
          <AddTask className={'addTask'} onAddTask={(text) => setData(data.concat([{id: generateUniqueID(), title: text}]))}/>
        <Tasks className={'Tasks'} list={filteredList} onTaskFieldChange={handleTaskFieldChange} onDeleteTask = {(deletedId) => setData(data.filter(task => task.id !== deletedId))}/>
          <div className={'endButtons'}>
              <button className={'largeButton'} onClick={e => setData([])}>Delete All</button>
              //just have the value change instead of having a new button
              //rename visibility to show completed
              {visibility && <button className="largeButton" onClick={e => setVisibility(!visibility)}> Hide Complete Tasks</button>}
              {!visibility && <button className="largeButton" onClick={e => setVisibility(!visibility)}> Show All Tasks</button>}
              {/*<div className={'fullButton'}><button className={"deleteButton"} onClick={e => props.onDeleteTask(elem.id)}>Delete</button></div>*/}
          </div>
      </div>
  );
}

export default App;

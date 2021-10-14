import './App.css';
import Tasks from "./Tasks";
import {useState} from "react";
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
  console.log("in app");

  return (<div className={'App'}>
        <h1>Checklist App</h1>
        <AddTask className={'addTask'} onAddTask={(text) => setData(data.concat([{id: generateUniqueID(), title: text}]))}/>
        <Tasks className={'Tasks'} list={data} onDeleteTask = {(deletedId) => setData(data.filter(task => task.id !== deletedId))}/>
        <button className={'deleteAll'} onClick={e => setData([])}>Delete All</button>
    </div>
  );
}

export default App;

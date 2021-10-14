import './App.css';
import Tasks from "./Tasks";
import {useState} from "react";
import AddTask from "./AddTask";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

const initialData = [
  {
    title: "do dishes",
    id: "123"
  }
]

function App() {
  const [data, setData] = useState(initialData);
  console.log("in app");
  return (<div>
      <AddTask onAddTask={(text) => setData(data.concat([{id: generateUniqueID(), title: text}]))}/>
        <Tasks list={data} onDeleteTask = {(deletedId) => setData(data.filter(task => task.id != deletedId))}/>
        <button>Show Incomplete Tasks</button>
        {/*<button onClick={setData([])}>Delete All</button>*/}
    </div>
  );
}

export default App;

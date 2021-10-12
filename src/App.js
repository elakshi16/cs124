import './App.css';
import Tasks from "./Tasks";
import {useState} from "react";
import AddTask from "./AddTask";

const initialData = [
  {
    title: "do dishes",
    id: "123"
  }
]

function App() {
  const [data, setData] = useState(initialData);
  return (<div>
      <AddTask onAddTask={(text, id) => setData(data.concat([{title: text, id: id}]))}/>
        <Tasks list={data}/>
    </div>
  );
}

export default App;

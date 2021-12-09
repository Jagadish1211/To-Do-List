import React from "react";
import './App.css';
import Taskcard from './Components/Task_card';
import {useState} from "react";
import { uuid } from 'uuidv4';

function App() {
  const [entry,setEntry] = useState("");
  const [task,setTask] = useState([]);


  const handlechange =function Handlechange(change){
        setEntry(change.target.value)
  };

  const handlesubmit = function Handlesubmit(submit){
        submit.preventDefault();
        setTask((prevValue)=> prevValue.concat(entry));
        setEntry("");
  }


  return (
   <div className="container">
    <h1 className= "heading">
      To-Do List
    </h1>
    <input onChange={handlechange} type="text" value={entry} placeholder="Add to list.." >
    
    </input>
    <button onClick={handlesubmit} className="submitbtn" type="submit" name="Add_task">
      Add task
    </button>
    <div>
     {task.map((tasks)=> (tasks?(<Taskcard key={uuid()} task={tasks} />): null))};
    </div>
    
   </div>
  );
}

export default App;

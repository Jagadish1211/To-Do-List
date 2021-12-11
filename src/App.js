import React from "react";
import './App.css';
import Taskcard from './Components/Task_card';
import {useState} from "react";
import { uuid } from 'uuidv4';

 

function App() {
  const [entry,setEntry] = useState("");
  const [task,setTask] = useState([
    {
      id:uuid(),
      taskname: ""
    }
  ]);


  const handlechange =function Handlechange(change){
        setEntry(change.target.value)
  };

  const handlesubmit = function Handlesubmit(submit){
        submit.preventDefault();
        setTask((prevValue)=> prevValue.concat({
          id:prevValue,
          taskname:entry
        }))
        setEntry("");
  }

  function Deltask(id){
    setTask(task.filter((e)=> id !== e.id ))
    }
  
  function Edittask(id){
    const editthis = task.find((e)=> id ===e.id)
    
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
     {task.map((tasks)=> (tasks.taskname?(<Taskcard key={uuid()} id={tasks.id} edit={Edittask} oncheck={Deltask} task={tasks.taskname} />): null))};
    </div>
    
   </div>
  );
}

export default App;


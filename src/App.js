import React from "react";
import './App.css';
import Taskcard from './Components/Task_card';
import {useState} from "react";
import { uuid } from 'uuidv4';

 

function App() {
  const [entry,setEntry] = useState("");
  const [editingEntry, setEditingEntry] = useState(-1);
  const [task,setTask] = useState([]);


  const handlechange =function Handlechange(change){
    setEntry(change.target.value);
  };

  const handlesubmit = function Handlesubmit(submit){
    submit.preventDefault();
    let newTask = [...task];
    newTask.push({
      id: uuid(),
      taskname: entry,
    });
    setTask(newTask);
    setEntry("");
    
  }

  function Deltask(id){
    setTask(task.filter((e)=> id !== e.id ))
    }
  
  function Edittask(index){
    setEditingEntry(index);
    setEntry(task[index].taskname);
   
  }

  function updateTask(){
    let newTask = [...task];
    newTask[editingEntry]['taskname'] = entry;
    setTask(newTask);
    setEditingEntry(-1);
    setEntry("");
  }

  return (
    <div className="Outer-container">
   <div className="container">
    <h1 className= "heading">
      TO-DO List
    </h1>
    <p styles={{color:"white"}}>{editingEntry === -1 ? "" : `EDITING TASK ${editingEntry+1}`}</p>
    <input onChange={handlechange} type="text" value={entry} placeholder="Add to list.." >
    
    </input>
    <button onClick={editingEntry === -1 ? handlesubmit : updateTask} className="submitbtn" type="submit" name="Add_task">
      {editingEntry === -1 ?"ADD TASK": "SAVE EDIT"}
    </button>
    <div>
     {task.map((tasks, index)=> (tasks.taskname?(<Taskcard key={uuid()} index={index} id={tasks.id} edit={Edittask} oncheck={Deltask} task={tasks.taskname} />): null))};
    </div>
    
   </div>
   </div>
  );
}

export default App;


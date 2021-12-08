
import './App.css';
import Taskcard from './Components/Task_card';

function App() {
  return (
   <div className="container">
    <h1 className= "heading">
      To-Do List
    </h1>
    <input classname="task" type="text" placeholder="Add to list..">
    
    </input>
    <button type="submit" name="Add_task">
      Add task
    </button>
    <Taskcard />
   </div>
  );
}

export default App;

import React,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {

  const [tasks,setTasks] = useState( [
    {
        id:1,
        text:"Doctor's Appointment",
        day:"Feb 5th  at 2:30",
        reminder:true
    },
    {
        id:2,
        text:"Meeting at school",
        day:"Feb 6th  at 1:30",
        reminder:true
    },
    {
        id:3,
        text:"Food shopping",
        day:"Feb 5th  at 2:30",
        reminder:false
    }
]);

//Delete Tasks
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
}

//Toggle reminder
const toggleReminder = (id) =>{
  console.log('toggle',id)
}

  return (
    <div className="App">
      <Header />
      {tasks.length > 0 ?  <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No taks remained'}
    </div>
  );
}

export default App;

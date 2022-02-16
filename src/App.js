import React, { useState,useEffect } from 'react';
import './App.css';
import AddTask from './components/addtask';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {

const [showAddTask,setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task));
  };

//fetching data from json server
const fetchTasks =  async () =>{
  const response =  await fetch('http://localhost:5000/tasks');
  const data = await response.json();
  return data;
};
  useEffect(() => {
    const getTasks = async () =>{
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();
  },[]);

 //Delete Tasks
 const deleteTask = async (id) => {
  await fetch('http://localhost:5000/tasks/'+id,{
    method:"DELETE"
  });
  setTasks(tasks.filter((task) => task.id !== id));
}

  //Add tasks
  const addTask = async (task) =>{
   const res = await fetch("http://localhost:5000/tasks",{
     method:"POST",
     headers:{'Content-type':'application/json'},
     body:JSON.stringify(task)
   });

   const data = await res.json();
   setTasks([...tasks,data]);

    // const id = Math.floor(Math.random()*1000+1);
    // const newTask = {id,...task};
    // setTasks([...tasks,newTask]);
  };

  return (
    <div className="App">
      <Header onShow={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
     {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (<Tasks
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleReminder} />) : ('No taks remained')}
    </div>
  );
}

export default App;

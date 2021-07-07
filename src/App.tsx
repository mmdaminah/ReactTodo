import React from 'react';
import './App.css';
import MyNavbar from './components/navbar/Navbar';
import MyTable from './components/table/Table'
import {useState} from 'react'
interface ITasks {
  id:number;
  TaskName:string;
  TaskPriority:string;
  TaskStatus:string;
  TaskDeadline:any;
  TaskDetails:string;
}
function App() {
  const [Tasks, setTasks] = useState<ITasks[]>([])
  const [copiedTasks, setCopiedTasks] = useState<ITasks[]>([]);
  return (
    <div>
      <MyNavbar Tasks={Tasks} setTasks={setTasks} 
      copiedTasks={copiedTasks} setCopiedTasks={setCopiedTasks}/>
      <MyTable Tasks={Tasks} setTasks={setTasks} 
      copiedTasks={copiedTasks} setCopiedTasks={setCopiedTasks}/>
    </div>
  );
}
export default App;

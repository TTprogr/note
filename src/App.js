import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctor',
        day: '15.3 at 7:30',
        reminder: true,
    },
    {
        id: 2,
        text: 'Appointment',
        day: '24.3 at 16:20',
        reminder: true,
    },
    {
        id: 3,
        text: 'Shop',
        day: 'Monday',
        reminder: false,
    },
])

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) +1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

// Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => 
  task.id === id ? { ...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} 
      showAdd={showAddTask}></Header>
      {showAddTask && <AddTask onAdd={addTask}></AddTask>}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask}
      onToggle={toggleReminder}></Tasks>) : ('Nothing to remind')}
    </div>
  )
}

export default App;

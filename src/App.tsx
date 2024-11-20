import { useEffect, useState } from 'react'
import './App.css'
import { FormNewTask } from './components/FormNewTask/FormNewTask'
import { CardProps } from './components/Card/Card.props'
import { CardList } from './components/CardList/CardList';
import { loadTasks, saveTasks } from './helpers/usingLocalStorage';

function App() {
  const [tasks, setTasks] = useState<CardProps[]>(loadTasks('tasks'));

  useEffect(() => {
    saveTasks('tasks', tasks);
  },[tasks]);

  const addTask = (task: CardProps) => {
    setTasks(prev => [...prev, task]);
  }

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(c => c.idTask !== id))
  }

  const changeStatus = (id: string) => {
    setTasks(prev => prev.map((card) => card.idTask === id ? { ...card, isDone: !card.isDone } : card));
  }

  return (
    <>
      <FormNewTask addTask={addTask}/>
      <CardList cards={tasks} deleteTask={deleteTask} changeStatus={changeStatus}/>
    </>
  )
}

export default App

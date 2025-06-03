import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useHooks } from './hooks/ToDoHooks'
import { ToDoListComponent } from './components/ToDoListComponent'
import { ToDoCreateComponent } from './components/ToDoCreateComponent'
import { ToDoFilterComponent } from './components/ToDoFilterComponent'

function App() {
  const { todoList, add, removeToDo, updateToDo } = useHooks();
  //updateToDo(26, 'valami mas', 'egyeb description', 'P0 (high)');
  return (
    <>
      <h1>My ToDo application</h1>
      <ToDoCreateComponent addToDo={add} />
      <ToDoFilterComponent />
      <h2>My ToDos</h2>
      <ToDoListComponent todos={todoList} removeToDo={removeToDo} updateToDo={updateToDo} />
    </>
  )
}

export default App

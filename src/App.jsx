import { useState } from 'react'
import './App.css'
import { useHooks } from './hooks/ToDoHooks'
import { ToDoListComponent } from './components/ToDoListComponent'
import { ToDoCreateComponent } from './components/ToDoCreateComponent'
import { ToDoFilterComponent } from './components/ToDoFilterComponent'

function App() {
  const { todoList, removeToDo, updateToDo, upsertToDo } = useHooks();
  const [editTodo, setEditToDo] = useState();
  return (
    <>
      <h1>My ToDo application</h1>
      <ToDoCreateComponent addToDo={upsertToDo} editToDo={editTodo} />
      <ToDoFilterComponent />
      <h2>My ToDos</h2>
      <ToDoListComponent todos={todoList} removeToDo={removeToDo} updateToDo={updateToDo} edit={setEditToDo} />
    </>
  )
}

export default App

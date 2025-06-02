import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useHooks } from './hooks/ToDoHooks'
import { ToDoListComponent } from './components/ToDoListComponent'
import { ToDoCreateComponent } from './components/ToDoCreateComponent'

function App() {
  const [count, setCount] = useState(0)
  const { todos, add } = useHooks();
  //add('ToDo Title', 'Small description', 'P1 (medium)');

  return (
    <>
      <h1>My ToDo application</h1>
      <div>
        <ToDoCreateComponent />
      </div>
      <h2>My ToDos</h2>
      <div>
        <ToDoListComponent todos={todos} />
      </div>
    </>
  )
}

export default App

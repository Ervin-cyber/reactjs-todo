import { useState } from 'react'
import '../App.css'
import { useHooks } from '../hooks/ToDoHooks'
import { ToDoListComponent } from './ToDoListComponent'
import { ToDoCreateComponent } from './ToDoCreateComponent'
import { ToDoFilterComponent } from './ToDoFilterComponent'

export function HomePageComponent() {
    const { todoList, removeToDo, upsertToDo, load } = useHooks();
    const [editTodo, setEditToDo] = useState();
    return (
        <>
            <a href='' onClick={load}>
                <h1>My ToDo application</h1>
            </a>
            <ToDoCreateComponent upsert={upsertToDo} editToDo={editTodo} />
            <ToDoFilterComponent loadToDos={load} />
            <h2>My ToDos</h2>
            <ToDoListComponent todos={todoList} removeToDo={removeToDo} updateToDo={upsertToDo} edit={setEditToDo} />
        </>
    )

}
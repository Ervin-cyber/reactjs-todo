import { useEffect, useState } from "react";
import { getAll, addToDo, deleteToDo, updToDo } from "../db/db";

export function useHooks() {
    const [todoList, setTodos] = useState([]);

    const load = async () => {
        const all = await getAll();
        setTodos(all);
    }
    const add = async (title, description, priority) => {
        await addToDo({ title, description, priority, created_date: new Date() });
        load();
    }
    const removeToDo = async (id) => {
        await deleteToDo(id);
        load();
    }

    const updateToDo = async (id, title, description, priority) => {
        await updToDo({ id, title, description, priority, created_date: new Date() });
        //load();
    }

    useEffect(() => {
        load();
    }, []);

    return { todoList, add, removeToDo, updateToDo }
}
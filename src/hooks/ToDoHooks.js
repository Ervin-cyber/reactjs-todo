import { useEffect, useState } from "react";
import { getAll, addToDo } from "../db/db";

export function useHooks() {
    const [todos, setTodos] = useState([]);

    const load = async () => {
        const all = await getAll();
        setTodos(all);
    }
    const add = async (title, description, priority) => {
        await addToDo({ title, description, priority, created_date: new Date() });
        //load();
    }

    useEffect(() => {
        load();
    }, []);

    return { todos, add }
}
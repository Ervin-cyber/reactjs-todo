import { useEffect, useState } from "react";
import { getAll, addToDo, deleteToDo, updToDo } from "../db/db";

export function useHooks() {
    const [todoList, setTodos] = useState([]);

    const load = async () => {
        const all = await getAll();
        setTodos(all);
    }
    /*const add = async (title, description, priority) => {
        await addToDo({ title, description, priority, created_date: new Date() });
        load();
    }*/
    const removeToDo = async (id) => {
        await deleteToDo(id);
        load();
    }

    const updateToDo = async (id, title, description, priority, created_date, status) => {
        await updToDo({ id, title, description, priority, created_date, status });
        load();
    }

    const upsertToDo = async (id, title, description, priority, created_date, status) => {
        if (id == undefined) {
            await updToDo({ title, description, priority, created_date, status });
        } else {
            await updToDo({ id, title, description, priority, created_date, status });
        }

        load();
    }

    useEffect(() => {
        load();
    }, []);

    return { todoList, removeToDo, updateToDo, upsertToDo }
}
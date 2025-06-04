import { useEffect, useState } from "react";
import { getAll, deleteToDo, updToDo } from "../db/db";
import { redirect } from "react-router";

export function useHooks() {
    const [todoList, setTodos] = useState([]);

    const load = async (filter) => {
        const all = await getAll();
        if (filter) {
            setTodos(toDoFilter(all, filter));
        } else setTodos(all);
    }

    const removeToDo = async (id) => {
        await deleteToDo(id);
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

    const toDoFilter = (all, filter) => {
        console.log(`filter:${JSON.stringify(filter)}`);
        let tempToDoList = all;
        if (filter.search) {
            tempToDoList = all.filter((todo) => todo.title.toLowerCase().includes(filter.search));
        }
        if (filter.priority) {
            tempToDoList = tempToDoList.filter((todo) => (
                todo.priority == filter.priority
            ));
        }
        if (filter.status) {
            tempToDoList = tempToDoList.filter((todo) => (
                todo.status == filter.status
            ));
        }
        if (filter.dateFrom) {
            tempToDoList = tempToDoList.filter((todo) =>
                new Date(todo.created_date) >= new Date(filter.dateFrom)
            );
        }
        if (filter.dateTo) {
            tempToDoList = tempToDoList.filter((todo) =>
                new Date(todo.created_date) <= new Date(filter.dateTo)
            );
        }
        return tempToDoList;
    }

    const generateSampleData = () => {
        console.log(`generateSampleData`);
        upsertToDo(undefined, 'Home work', 'Do some home work', "P0 (high)", new Date(new Date().setDate(new Date().getDate() + Math.floor(Math.random() * 10))), "Completed");
        upsertToDo(undefined, 'Walk the dog', 'Take the dog for a 30 minute walk', "P1 (medium)", new Date(new Date().setDate(new Date().getDate() - Math.floor(Math.random() * 10))), "In progress");
        upsertToDo(undefined, 'Check email', 'Check for new emails', "P2 (low)", new Date(new Date().setDate(new Date().getDate() + Math.floor(Math.random() * 10))), "Completed");
        upsertToDo(undefined, 'Water the plans', 'Water all indoor plants', "P1 (medium)", new Date(new Date().setDate(new Date().getDate() - Math.floor(Math.random() * 10))), "In progress");
        upsertToDo(undefined, 'Exercise', 'Do 1 hour of exercise', "P2 (low)", new Date(new Date().setDate(new Date().getDate() + Math.floor(Math.random() * 10))), "Completed");
        upsertToDo(undefined, 'Talk', 'Have a chat with someone', "P0 (high)", new Date(new Date().setDate(new Date().getDate() + Math.floor(Math.random() * 10))), "In progress");
        upsertToDo(undefined, 'Work', 'Work at least 8 hours', "P0 (high)", new Date(new Date().setDate(new Date().getDate() - Math.floor(Math.random() * 10))), "In progress");
        upsertToDo(undefined, 'Move', 'Go for a short walk ', "P2 (low)", new Date(new Date().setDate(new Date().getDate() + Math.floor(Math.random() * 10))), "In progress");
        upsertToDo(undefined, 'Lunch', 'Have lunch at least once', "P0 (high)", new Date(new Date().setDate(new Date().getDate() - Math.floor(Math.random() * 10))), "In progress");
        upsertToDo(undefined, 'Breakfast', 'Breakfast at 7 o clock', "P0 (high)", new Date(new Date().setDate(new Date().getDate() - Math.floor(Math.random() * 10))), "Completed");
        load();
        return redirect("/");
    }

    useEffect(() => {
        load();
    }, []);

    return { todoList, removeToDo, upsertToDo, load, generateSampleData }
}
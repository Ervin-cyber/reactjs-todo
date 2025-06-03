import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';


export function ToDoListComponent({ todos, removeToDo, updateToDo }) {
    console.log(JSON.stringify());
    const [editTitle, setTitle] = useState("");
    const [editDescription, setDescription] = useState("");
    const [editPriority, setPriority] = useState("");
    const [editDate, setDate] = useState("");

    function handleDelete(id) {
        if (confirm('Are you sure?'))
            removeToDo(id);
    }
    function handleEdit(title, description, priority, created_date) {

        //updateToDo(title, description, priority, created_date)
    }

    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell >Description</TableCell>
                        <TableCell>Priority</TableCell>
                        <TableCell>Created date</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {todos.map(({ title, description, priority, created_date, status, id }) => (
                        <TableRow key={id}>
                            <TableCell>{id}</TableCell>
                            <TableCell>{title}</TableCell>
                            <TableCell>{description}</TableCell>
                            <TableCell>{priority}</TableCell>
                            <TableCell>{created_date.toLocaleString()}</TableCell>
                            <TableCell>
                                <form>
                                    <Button variant="outlined" onClick={() => handleEdit(title, description, priority, created_date)}>Edit</Button>
                                </form>
                            </TableCell>
                            <TableCell>
                                <form >
                                    <Button variant="outlined" onClick={() => handleDelete(id)}>Delete</Button>
                                </form>
                            </TableCell>
                            <TableCell>
                                {status == 'Completed' ? status :
                                    <div>
                                        <Button variant="outlined">Mark as completed</Button>
                                    </div>
                                }
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}
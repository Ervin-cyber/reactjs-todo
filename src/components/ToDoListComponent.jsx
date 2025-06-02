import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import * as React from 'react';


export function ToDoListComponent({ todos }) {
    console.log(JSON.stringify());
    return (
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
                                <button>Edit</button>
                            </form>
                        </TableCell>
                        <TableCell>
                            <form>
                                <button>Delete</button>
                            </form>
                        </TableCell>
                        <TableCell>
                            {status}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
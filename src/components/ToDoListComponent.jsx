import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

export function ToDoListComponent({ todos, removeToDo, updateToDo, edit }) {

    function handleDelete(id) {
        if (confirm('Are you sure?'))
            removeToDo(id);
    }
    function handleEdit(id, title, description, priority, created_date, status) {
        edit({ id, title, description, priority, created_date, status })
    }
    function handleCompleted(id, title, description, priority, created_date, status) {
        updateToDo(id, title, description, priority, created_date, status)
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
                            <TableCell>{created_date ? created_date.toLocaleString() : ''}</TableCell>
                            <TableCell>
                                <form>
                                    <Button variant="outlined" onClick={() => handleEdit(id, title, description, priority, created_date, status)}>Edit</Button>
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
                                        <Button variant="outlined" onClick={() => handleCompleted(id, title, description, priority, created_date, "Completed")}>Mark as completed</Button>
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
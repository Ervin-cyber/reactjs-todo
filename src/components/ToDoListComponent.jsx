import { Button, Table, TableBody, TableCell, TableHead, TableRow, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { useState } from 'react';

export function ToDoListComponent({ todos, removeToDo, updateToDo, edit }) {
    const [open, setOpen] = useState(false);
    const [deleteID, setDeleteID] = useState();

    const handleClose = () => {
        setOpen(false);
    }

    const handleCloseAndDelete = () => {
        handleClose();
        if (deleteID) {
            removeToDo(deleteID)
            setDeleteID();
        }
    }

    const handleOpen = () => {
        setOpen(true);
    }

    function handleDelete(id) {
        handleOpen();
        setDeleteID(id);

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
                            <TableCell>{created_date ? created_date.toLocaleString('ro-RO', { timezone: "Europe/Bucharest" }) : ''}</TableCell>
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
            <Dialog open={open}
                onClose={handleClose}>
                <DialogTitle>
                    {"Confirmation required!"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {"Are you sure you want to delete it?"}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        {"Cancel"}
                    </Button>
                    <Button onClick={handleCloseAndDelete}>
                        {"Yes"}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
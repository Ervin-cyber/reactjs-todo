import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";

export function ToDoCreateComponent({ addToDo }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addToDo(title, description, priority);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8
                }}>

                    <TextField id="title" label="Title" variant="outlined" onChange={(text) => setTitle(text.target.value)} required />
                    <TextField id="description" label="Description" variant="outlined" onChange={(text) => setDescription(text.target.value)} />
                    <FormControl fullWidth>
                        <InputLabel id="select-priority-label">Priority</InputLabel>
                        <Select
                            labelId="select-priority-label"
                            id="select-priority"
                            label="Priority"
                            onChange={(text) => setPriority(text.target.value)}
                            required>
                            <MenuItem></MenuItem>
                            <MenuItem value={'P0 (high)'}>P0 (high)</MenuItem>
                            <MenuItem value={'P1 (medium)'}>P1 (medium)</MenuItem>
                            <MenuItem value={'P2 (low)'}>P2 (low)</MenuItem>
                        </Select>
                    </FormControl>
                    <Button type="submit" variant="outlined">Add</Button>
                </div>
            </form>
        </>
    )
}
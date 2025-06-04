import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export function ToDoCreateComponent({ upsert, editToDo }) {
    const [id, setID] = useState(undefined);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");
    const [createdDate, setCreatedDate] = useState("");
    const [status, setStatus] = useState("In progress");
    const [actionButtonText, setActionButtonText] = useState("Add");
    const handleSubmit = () => {
        upsert(id, title, description, priority, createdDate == "" ? new Date() : createdDate, status);
    }
    useEffect(() => {
        if (editToDo) {
            //(`todo:${JSON.stringify(editToDo)}`)
            setID(editToDo.id)
            setTitle(editToDo.title)
            setDescription(editToDo.description)
            setPriority(editToDo.priority)
            setCreatedDate(editToDo.created_date)
            setStatus(editToDo.status)
            setActionButtonText("Save")
        }
    }, editToDo)
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8
                }}>

                    <TextField id="title" label="Title" variant="outlined" onChange={(text) => setTitle(text.target.value)} required value={title} />
                    <TextField id="description" label="Description" variant="outlined" onChange={(text) => setDescription(text.target.value)} value={description} />
                    <FormControl fullWidth>
                        <InputLabel id="select-priority-label">Priority</InputLabel>
                        <Select
                            labelId="select-priority-label"
                            id="select-priority"
                            label="Priority"
                            onChange={(text) => setPriority(text.target.value)}
                            value={priority}
                            required>
                            <MenuItem></MenuItem>
                            <MenuItem value={'P0 (high)'} selected={priority == "P0 (high)"}>P0 (high)</MenuItem>
                            <MenuItem value={'P1 (medium)'} selected={priority == "P1 (medium)"}>P1 (medium)</MenuItem>
                            <MenuItem value={'P2 (low)'} selected={priority == "P2 (low)"}>P2 (low)</MenuItem>
                        </Select>
                    </FormControl>
                    <Button type="submit" variant="outlined">{actionButtonText}</Button>
                </div>
            </form>
        </>
    )
}
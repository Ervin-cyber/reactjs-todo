import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

export function ToDoCreateComponent() {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: 8
            }}>
                <TextField id="outlined-basic" label="Title" variant="outlined" />
                <TextField id="outlined-basic" label="Description" variant="outlined" />
                <FormControl fullWidth>
                    <InputLabel id="select-priority-label">Priority</InputLabel>
                    <Select
                        labelId="select-priority-label"
                        id="select-priority"
                        label="Priority">
                        <MenuItem value={'P0 (high)'}>P0 (high)</MenuItem>
                        <MenuItem value={'P1 (medium)'}>P1 (medium)</MenuItem>
                        <MenuItem value={'P2 (low)'}>P2 (low)</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="outlined">Add</Button>
            </div>
        </>
    )
}
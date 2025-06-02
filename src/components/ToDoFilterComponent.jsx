import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateRangePicker } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react";

export function ToDoFilterComponent() {
    const [selectedDate, setDate] = useState();
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 8
        }}>
            <h2>Filter by</h2>
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
            <FormControl fullWidth>
                <InputLabel id="select-status-label">Status</InputLabel>
                <Select
                    labelId="select-status-label"
                    id="select-status"
                    label="Status">
                    <MenuItem value={'Completed'}>Completed</MenuItem>
                    <MenuItem value={'In progress'}>In progress</MenuItem>
                </Select>
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateRangePicker value={selectedDate} onChange={(newDate) => setDate(newDate)} />
            </LocalizationProvider>
            <Button variant="outlined">Filter</Button>
        </div>
    )
}
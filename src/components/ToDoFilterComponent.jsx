import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useState } from "react";

export function ToDoFilterComponent({ loadToDos }) {
    const [priority, setPriority] = useState();
    const [status, setStatus] = useState();
    const [dateFrom, setDateFrom] = useState(null);
    const [dateTo, setDateTo] = useState(null);
    const [search, setSearch] = useState();
    const onFilterSelected = () => {
        loadToDos({ priority, status, dateFrom, dateTo, search })
    }
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            gap: 8
        }}>
            <h2>Filter by</h2>
            <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel id="select-priority-label">Priority</InputLabel>
                <Select
                    labelId="select-priority-label"
                    id="select-priority"
                    label="Priority"
                    onChange={(text) => setPriority(text.target.value)}>
                    <MenuItem></MenuItem>
                    <MenuItem value={'P0 (high)'}>P0 (high)</MenuItem>
                    <MenuItem value={'P1 (medium)'}>P1 (medium)</MenuItem>
                    <MenuItem value={'P2 (low)'}>P2 (low)</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel id="select-status-label">Status</InputLabel>
                <Select
                    labelId="select-status-label"
                    id="select-status"
                    label="Status"
                    onChange={(text) => setStatus(text.target.value)}>
                    <MenuItem></MenuItem>
                    <MenuItem value={'Completed'}>Completed</MenuItem>
                    <MenuItem value={'In progress'}>In progress</MenuItem>
                </Select>
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <FormControl sx={{ m: 1, maxWidth: 170 }}>
                    <DatePicker label="Date From" value={dateFrom} onChange={(newDate) => setDateFrom(newDate)} />
                </FormControl>
                <FormControl sx={{ m: 1, maxWidth: 170 }}>
                    <DatePicker label="Date To" value={dateTo} onChange={(newDate) => setDateTo(newDate)} />
                </FormControl>
            </LocalizationProvider>
            <FormControl sx={{ m: 1, minWidth: 50 }}>
                <TextField id="search" label="Search ToDo" variant="outlined" onChange={(text) => setSearch(text.target.value)} />
            </FormControl>
            <FormControl sx={{ justifyContent: 'center' }}>
                <Button variant="outlined" onClick={onFilterSelected}>Filter</Button>
            </FormControl>
        </div>
    )
}
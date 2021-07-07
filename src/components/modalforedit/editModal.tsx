import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { TextField, InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';
import { useState } from 'react'
interface ITasks {
    id: number;
    TaskName: string;
    TaskPriority: string;
    TaskStatus: string;
    TaskDeadline: any;
    TaskDetails:string;
}
interface IProps {
    show: boolean;
    onHide: Function;
    itemTobeEdited: ITasks;
    Tasks: ITasks[];
    setTasks: Function;
    setCopiedTasks:Function;
}

const EditModal: React.FC<IProps> = ({ show, onHide, itemTobeEdited, Tasks, setTasks,setCopiedTasks }) => {
    const [taskName, setTaskName] = useState(itemTobeEdited.TaskName);
    const [priority, setPriority] = useState(itemTobeEdited.TaskPriority);
    const [taskDetails, setTaskDetails] = useState(itemTobeEdited.TaskDetails);
    const [status, setStatus] = useState(itemTobeEdited.TaskStatus);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const handleInputChange = (event: React.ChangeEvent) => {
        const data = event.target as HTMLInputElement;
        setTaskName(data.value)
    }
    const handlePriorityChange = (event: any) => {
        const target = event.target as HTMLSelectElement;
        setPriority(target.value)
    }
    const handleStatusChange = (event: any) => {
        const target = event.target as HTMLSelectElement;
        setStatus(target.value)
    }
    const handleSave = () => {
        const foundItem = Tasks.find((item) => item.id === itemTobeEdited.id)
        taskName && (foundItem!.TaskName = taskName);
        priority && (foundItem!.TaskPriority = priority);
        status && (foundItem!.TaskStatus = status);
        selectedDate && (foundItem!.TaskDeadline = selectedDate);
        taskDetails && (foundItem!.TaskDetails = taskDetails);
        onHide()
    }
    const handleDateChange = (date: any) => {
        setSelectedDate(date)
    }
    const handleTaskDetailChange = (event: React.ChangeEvent)=>{
        const data = event.target as HTMLInputElement;
        setTaskDetails(data.value)
    }
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header >
                <Modal.Title>Edit Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <TextField onChange={handleInputChange} className="mx-2 my-3" defaultValue={itemTobeEdited.TaskName} id="outlined-basic" label="Task Name" variant="outlined" />
                <div>
                    <FormControl variant="outlined" className="w-25">
                        <InputLabel id="demo-simple-select-outlined-label">Priority</InputLabel>
                        <Select className="mx-2" name="Priority"
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined" label="Age"
                            defaultValue={itemTobeEdited.TaskPriority}
                            onChange={handlePriorityChange}
                        >
                            <MenuItem value={itemTobeEdited.TaskPriority}>{itemTobeEdited.TaskPriority}</MenuItem>
                            {itemTobeEdited.TaskPriority != "Low" && <MenuItem value={"Low"}>Low</MenuItem>}
                            {itemTobeEdited.TaskPriority != "Medium" && <MenuItem value={"Medium"}>Medium</MenuItem>}
                            {itemTobeEdited.TaskPriority != "High" && <MenuItem value={"High"}>High</MenuItem>}
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" className="w-25">
                        <InputLabel id="demo-simple-select-outlined-label">Priority</InputLabel>
                        <Select className="mx-2" name="Priority"
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined" label="Age"
                            defaultValue={itemTobeEdited.TaskStatus}
                            onChange={handleStatusChange}
                        >
                            <MenuItem value={itemTobeEdited.TaskStatus}>{itemTobeEdited.TaskStatus}</MenuItem>
                            {itemTobeEdited.TaskStatus != "To do" && <MenuItem value={"To do"}>To do</MenuItem>}
                            {itemTobeEdited.TaskStatus != "Doing" && <MenuItem value={"Doing"}>Doing</MenuItem>}
                            {itemTobeEdited.TaskStatus != "Done" && <MenuItem value={"Done"}>Done</MenuItem>}
                        </Select>
                    </FormControl>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid className="w-50" container justify="space-around">
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="Date picker dialog"
                                format="MM/dd/yyyy"
                                value={selectedDate}
                                defaultValue={itemTobeEdited.TaskDeadline}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    <TextField
                        className="w-100 mx-2 mt-3"
                        id="outlined-multiline-static"
                        label="Task Details"
                        multiline
                        rows={4}
                        onChange={handleTaskDetailChange}
                        defaultValue={itemTobeEdited.TaskDetails}
                        placeholder="Task Details..."
                        variant="outlined"
                    />
                </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-between">
                <Button variant="light" onClick={onHide as React.MouseEventHandler<HTMLElement>} >
                    CANCEL
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    SAVE
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default EditModal

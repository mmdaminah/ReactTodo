import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { TextField, InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';
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
    itemTobeShowed: ITasks;
}

const ShowModal: React.FC<IProps> = ({ show, onHide, itemTobeShowed }) => {
    const nothing = () => { }
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header >
                <Modal.Title>Edit Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <TextField className="mx-2 my-3" value={itemTobeShowed.TaskName} id="outlined-basic" label="Task Name" variant="outlined" />
                <div>
                    <FormControl variant="outlined" className="w-25">
                        <InputLabel id="demo-simple-select-outlined-label">Priority</InputLabel>
                        <Select className="mx-2" name="Priority"
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined" label="Age"
                            value={itemTobeShowed.TaskPriority}
                        >
                            <MenuItem value={itemTobeShowed.TaskPriority}>{itemTobeShowed.TaskPriority}</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" className="w-25">
                        <InputLabel id="demo-simple-select-outlined-label">Priority</InputLabel>
                        <Select className="mx-2" name="Priority"
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined" label="Age"
                            value={itemTobeShowed.TaskStatus}
                        >
                            <MenuItem value={itemTobeShowed.TaskStatus}>{itemTobeShowed.TaskStatus}</MenuItem>
                        </Select>
                    </FormControl>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid className="w-50" container justify="space-around">
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="Date picker dialog"
                                format="MM/dd/yyyy"
                                value={itemTobeShowed.TaskDeadline}
                                onChange={nothing}
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
                        value={itemTobeShowed.TaskDetails}
                        placeholder="Task Details..."
                        variant="outlined"
                    />
                </div>
            </Modal.Body>
        </Modal>
    )
}
export default ShowModal

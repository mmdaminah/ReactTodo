import 'bootstrap/dist/css/bootstrap.min.css';
import Chip from '@material-ui/core/Chip';
import { FaRegEye, FaPencilAlt, FaTrashAlt, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { Table } from 'react-bootstrap'
import { useState, useContext } from 'react'
import EditModal from '../modalforedit/editModal'
import ShowModal from '../showModal/showModal'
import {context} from '../../App'
interface ITasks {
    id: number;
    TaskName: string;
    TaskPriority: string;
    TaskStatus: string;
    TaskDeadline: any;
    TaskDetails:string;
}

const MyTable: React.FC = () => {
    const {state,dispatch,copyState, copyDispatch} = useContext(context);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleRemove = (id: number) => {
        dispatch({type:"removeTask", payLoad:id})
        copyDispatch({type:"removeTask", payLoad:id})
    }
    //show item modal start
    const [itemModal, setItemModal] = useState<ITasks>({
        TaskDeadline: new Date(),TaskDetails:"shit",
        TaskName: "nothing", TaskPriority: "High", TaskStatus: "To do", id: 1
    });
    const handleShowItem = (id: number) => {
        const foundItem = state.find((item:any) => item.id === id) 
        foundItem && setItemModal(foundItem)
        setShow(true);
    }
    //show item modal end
    //filter by priority start
    const [mouseOverPriority, setMouseOverPriority] = useState(false);
    const handleMouseOverPriority = () => setMouseOverPriority(true)
    const handleMouseOutPriority = () => setMouseOverPriority(false)
    const [priorityArrow, setPriorityArrow] = useState(0)
    const handlePriorityClick = () => {
        setPriorityArrow(priorityArrow + 1)
        if ((priorityArrow + 1) % 3 === 0)
            dispatch({type:"sortById"})
        else if ((priorityArrow + 1) % 3 === 1)
            dispatch({type:"sortIncreasing",payLoad:"TaskPriority"})
        else if ((priorityArrow + 1) % 3 === 2)
            dispatch({type:"sortDecreasing",payLoad:"TaskPriority"})
    }
    //filter by priority end
    //filter by status start
    const [mouseOverStatus, setMouseOverStatus] = useState(false);
    const handleMouseOverStatus = () => setMouseOverStatus(true)
    const handleMouseOutStatus = () => setMouseOverStatus(false)
    const [statusArrow, setStatusArrow] = useState(0)
    const handleStatusClick = () => {
        setStatusArrow(statusArrow + 1)
        if ((statusArrow + 1) % 3 === 0)
            dispatch({type:"sortById"})
        else if ((statusArrow + 1) % 3 === 1)
            dispatch({type:"sortIncreasing",payLoad:"TaskStatus"})
        else if ((statusArrow + 1) % 3 === 2)
            dispatch({type:"sortDecreasing",payLoad:"TaskStatus"})
    }
    //filter by status end
    // filter by deadline start
    const [mouseOverDeadline, setMouseOverDeadline] = useState(false);
    const handleMouseOverDeadline = () => setMouseOverDeadline(true)
    const handleMouseOutDeadline = () => setMouseOverDeadline(false)
    const [deadlineArrow, setDeadlineArrow] = useState(0)
    const handleDeadlineClick = () => {
        setDeadlineArrow(deadlineArrow + 1)
        if ((deadlineArrow + 1) % 3 === 0)
            dispatch({type:"sortById"})
        else if ((deadlineArrow + 1) % 3 === 1)
            dispatch({type:"sortByDateIncreasing"})
        else if ((deadlineArrow + 1) % 3 === 2)
            dispatch({type:"sortByDateDecreasing"})
    }
    // filter by deadline end
    //edit item start
    const [editModal, setEditModal] = useState(false);
    const [itemTobeEdited, setItemTobeEdited] = useState<ITasks>({ id: 0, TaskStatus: "", TaskDeadline: "", TaskName: "", TaskPriority: "",TaskDetails:"" })
    const handleEditModalClose = () => setEditModal(false);
    const handleShowEditModal = (id: number) => {
        const foundItem = state.find((item:any) => item.id === id)
        foundItem && setItemTobeEdited(foundItem)
        setEditModal(true);
    }
    //edit item end
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Task</th>
                    <th onMouseEnter={handleMouseOverPriority}
                        onMouseLeave={handleMouseOutPriority}
                        onClick={handlePriorityClick}
                    >Priority {(priorityArrow % 3) === 1 && <FaArrowUp />}
                        {(priorityArrow % 3) === 2 && <FaArrowDown />}
                        {mouseOverPriority && (priorityArrow % 3) === 0 && <FaArrowUp />}
                    </th>
                    <th onMouseEnter={handleMouseOverStatus}
                        onMouseLeave={handleMouseOutStatus}
                        onClick={handleStatusClick}
                    >Status {(statusArrow % 3) === 1 && <FaArrowUp />}
                        {(statusArrow % 3) === 2 && <FaArrowDown />}
                        {mouseOverStatus && (statusArrow % 3) === 0 && <FaArrowUp />}
                    </th>
                    <th onMouseEnter={handleMouseOverDeadline}
                        onMouseLeave={handleMouseOutDeadline}
                        onClick={handleDeadlineClick}
                    >Deadline {(deadlineArrow % 3) === 1 && <FaArrowUp />}
                        {(deadlineArrow % 3) === 2 && <FaArrowDown />}
                        {mouseOverDeadline && (deadlineArrow % 3) === 0 && <FaArrowUp />}</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody className="text-center">
                <ShowModal show={show} onHide={handleClose}
                    itemTobeShowed={itemModal}
                />
                <EditModal show={editModal} onHide={handleEditModalClose}
                    itemTobeEdited={itemTobeEdited} />
                {
                    state?.map((item:any) => {
                        const date = item.TaskDeadline as Date
                        let priorityColor = "";
                        if (item.TaskPriority === "High")
                            priorityColor = "bg-danger text-white"
                        else if (item.TaskPriority === "Medium")
                            priorityColor = "bg-warning text-white"
                        let statusColor = "";
                        if (item.TaskStatus === "Done")
                            statusColor = "bg-success text-white"
                        else if (item.TaskStatus === "To do")
                            statusColor = "bg-primary text-white"
                        else
                            statusColor = "bg-warning text-white"
                        return (
                            <tr>
                                <td>{item.TaskName}</td>
                                <td><Chip className={priorityColor} label={item.TaskPriority} /></td>
                                <td><Chip className={statusColor} label={item.TaskStatus} /></td>
                                <td>{date.toLocaleDateString()}</td>
                                <td><FaRegEye className="mx-2" onClick={() => handleShowItem(item.id)} /><FaPencilAlt onClick={() => handleShowEditModal(item.id)} className="mx-3" /><FaTrashAlt className="mx-2" onClick={() => handleRemove(item.id)} /></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}
export default MyTable;
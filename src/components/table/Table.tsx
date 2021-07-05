import 'bootstrap/dist/css/bootstrap.min.css';
import Chip from '@material-ui/core/Chip';
import { FaRegEye, FaPencilAlt, FaTrashAlt , FaArrowUp, FaArrowDown } from "react-icons/fa";
import { Table } from 'react-bootstrap'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import MyModal from '../modal/modal'
interface ITasks {
    id: number;
    TaskName: string;
    TaskPriority: string;
    TaskStatus: string;
    TaskDeadline: any;
}
interface IProps {
    Tasks: ITasks[];
    setTasks: Function;
    copiedTasks:ITasks[];
    setCopiedTasks:Function;
}
const MyTable: React.FC<IProps> = ({ Tasks, setTasks, copiedTasks, setCopiedTasks}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleRemove = (id: number) => {
        setTasks(Tasks.filter((item) => id != item.id))
        setCopiedTasks(Tasks)
    }
    const [itemModal,setItemModal] = useState<ITasks[]>([]);
    const handleShowItem = (id: number) => {
        setItemModal(Tasks.filter((item)=> item.id == id))
        setShow(true);
    }
    //filter by priority start
    const [mouseOverPriority, setMouseOverPriority] = useState(false);
    const handleMouseOverPriority = ()=> setMouseOverPriority(true)
    const handleMouseOutPriority = ()=> setMouseOverPriority(false)
    const [priorityArrow,setPriorityArrow] = useState(0)
    const priorityToNum = (prio:string)=>{
        if(prio=="High") return 3;
        else if(prio=="Medium") return 2;
        else return 1;
    }
    const handlePriorityClick = ()=>{
        setPriorityArrow(priorityArrow+1)
        if ((priorityArrow+1)%3==0)
            setTasks(Tasks.sort((a,b)=> a.id - b.id))
        else if((priorityArrow+1)%3==1)
            setTasks(Tasks.sort((a, b)=> priorityToNum(b.TaskPriority) - priorityToNum(a.TaskPriority) ))
        else if((priorityArrow+1)%3==2)
            setTasks(Tasks.sort((a, b)=> priorityToNum(a.TaskPriority) - priorityToNum(b.TaskPriority) ))
    }
    //filter by priority end
    //filter by status start
    const [mouseOverStatus, setMouseOverStatus] = useState(false);
    const handleMouseOverStatus = ()=> setMouseOverStatus(true)
    const handleMouseOutStatus = ()=> setMouseOverStatus(false)
    const [statusArrow,setStatusArrow] = useState(0)
    const statusToNum = (stat:string)=>{
        if(stat=="To do") return 3;
        else if(stat=="Doing") return 2;
        else return 1;
    }
    const handleStatusClick = ()=>{
        setStatusArrow(statusArrow+1)
        if ((statusArrow+1)%3==0)
            setTasks(Tasks.sort((a,b)=> a.id - b.id))
        else if((statusArrow+1)%3==1)
            setTasks(Tasks.sort((a, b)=> statusToNum(b.TaskStatus) - statusToNum(a.TaskStatus) ))
        else if((statusArrow+1)%3==2)
            setTasks(Tasks.sort((a, b)=> statusToNum(a.TaskStatus) - statusToNum(b.TaskStatus) ))
    }
    //filter by status end
    // filter by deadline start
    const [mouseOverDeadline, setMouseOverDeadline] = useState(false);
    const handleMouseOverDeadline = ()=> setMouseOverDeadline(true)
    const handleMouseOutDeadline = ()=> setMouseOverDeadline(false)
    const [deadlineArrow,setDeadlineArrow] = useState(0)
    const handleDeadlineClick = ()=>{
        setDeadlineArrow(deadlineArrow+1)
        if ((deadlineArrow+1)%3==0)
            setTasks(Tasks.sort((a,b)=> a.id - b.id))
        else if((deadlineArrow+1)%3==1)
            setTasks(Tasks.sort((a, b)=> b.TaskDeadline - a.TaskDeadline ))
        else if((deadlineArrow+1)%3==2)
            setTasks(Tasks.sort((a, b)=> a.TaskDeadline - b.TaskDeadline ))
    }
    // filter by deadline end
    //edit item start
    const [editModalShow, setEditModalShow] = useState(false);
    
    const handleEdit = (id:number) =>{

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
                    >Priority {(priorityArrow%3)==1 && <FaArrowUp />}
                                {(priorityArrow%3)==2 && <FaArrowDown />}
                                {mouseOverPriority && (priorityArrow%3)==0 && <FaArrowUp />}
                    </th>
                    <th onMouseEnter={handleMouseOverStatus}
                        onMouseLeave={handleMouseOutStatus}
                        onClick={handleStatusClick}
                    >Status {(statusArrow%3)==1 && <FaArrowUp />}
                            {(statusArrow%3)==2 && <FaArrowDown />}
                            {mouseOverStatus && (statusArrow%3)==0 && <FaArrowUp />}
                    </th>
                    <th onMouseEnter={handleMouseOverDeadline}
                        onMouseLeave={handleMouseOutDeadline}
                        onClick={handleDeadlineClick}
                    >Deadline {(deadlineArrow%3)==1 && <FaArrowUp />}
                              {(deadlineArrow%3)==2 && <FaArrowDown />}
                              {mouseOverDeadline && (deadlineArrow%3)==0 && <FaArrowUp />}</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody className="text-center">
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header >
                        <Modal.Title>{itemModal[0] && itemModal[0].TaskName}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {itemModal[0] && <div>{itemModal[0].TaskPriority}</div>}
                        {itemModal[0] && <div>{itemModal[0].TaskStatus}</div>}
                        {itemModal[0] && <div>{itemModal[0].TaskDeadline.toLocaleDateString()}</div>}
                    </Modal.Body>
                </Modal>
                {/* <MyModal /> */}
                {
                    Tasks.map((item) => {
                        const date = item.TaskDeadline as Date
                        let priorityColor = "";
                        if(item.TaskPriority == "High")
                            priorityColor ="bg-danger text-white"
                        else if(item.TaskPriority == "Medium")
                            priorityColor ="bg-warning text-white"
                        let statusColor = "";
                        if(item.TaskStatus == "Done")
                            statusColor ="bg-success text-white"
                        else if(item.TaskStatus == "To do")
                            statusColor ="bg-primary text-white"
                        else
                            statusColor ="bg-warning text-white"
                        return (
                            <tr>
                                <td>{item.TaskName}</td>
                                <td><Chip className={priorityColor} label={item.TaskPriority} /></td>
                                <td><Chip className={statusColor} label={item.TaskStatus} /></td>
                                <td>{date.toLocaleDateString()}</td>
                                <td><FaRegEye className="mx-2" onClick={() => handleShowItem(item.id)}/><FaPencilAlt onClick={()=>handleEdit(item.id)} className="mx-3"/><FaTrashAlt className="mx-2" onClick={() => handleRemove(item.id)} /></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}
export default MyTable;
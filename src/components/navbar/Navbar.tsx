import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFunnelFill, BsPencilSquare } from "react-icons/bs";
import { Navbar, Form, FormControl, Button } from 'react-bootstrap'
import React, { useState } from 'react'
import MyModal from '../modal/modal';
interface ITasks {
    TaskName:string;
    TaskPriority:string;
    TaskStatus:string;
}
interface IProps {
    Tasks:ITasks[];
    setTasks:Function;
    copiedTasks:ITasks[];
    setCopiedTasks:Function;
}
const MyNavbar:React.FC<IProps> = ({Tasks, setTasks, copiedTasks, setCopiedTasks}) => {
    const [show, setShow] = useState(false);
    const [TaskNameInput, setTaskNameInput] = useState("");
    const [priority,setPriority] = useState("");
    const [status,setStatus] = useState("");
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(),);
    const handleClose = () => {
        setShow(false);
    };
    const handleSave = ()=>{
        const timeStamp = Date.now()
        setTasks([...Tasks, {id:timeStamp,TaskName:TaskNameInput,TaskPriority:priority,TaskStatus:status,TaskDeadline:selectedDate}])
        setCopiedTasks([...Tasks,{id:timeStamp,TaskName:TaskNameInput,TaskPriority:priority,TaskStatus:status,TaskDeadline:selectedDate}])
        setShow(false);
    }
    const handleShow = () => setShow(true);
    const handleSearch = (event:React.ChangeEvent)=>{
        const data = event.target as HTMLInputElement;
        if(data.value=="")
            setTasks(copiedTasks)
        else
            setTasks(Tasks.filter((item)=> item.TaskName.startsWith(data.value)))
    }
    return (
        <>
            <Navbar bg="light" expand="lg" className="w-100">
                <div className="d-flex justify-content-between w-100">
                    <div>
                        <Navbar.Brand href="#home">My To-Do Tasks</Navbar.Brand>
                    </div>
                    <div>
                        <Form inline>
                            <FormControl onChange={handleSearch} type="text" placeholder="Search" className="mr-sm-2" />
                            <BsPencilSquare className="mx-2" style={{width:"25px", height:"25px"}} onClick={handleShow}/>
                            <BsFunnelFill className="mx-2" style={{width:"25px", height:"25px"}} />
                        </Form>
                    </div>
                </div>
                <MyModal show={show} handleClose={handleClose}
                         handleSave={handleSave} 
                         setTaskNameInput={setTaskNameInput} 
                         setPriority={setPriority}
                         setStatus={setStatus}
                         setSelectedDate={setSelectedDate}
                         selectedDate={selectedDate}
                         />      
            </Navbar>
        </>
    )
}
export default MyNavbar;
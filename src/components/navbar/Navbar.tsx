import 'bootstrap/dist/css/bootstrap.min.css';
import { BsPencilSquare } from "react-icons/bs";
import { Navbar, Form, FormControl } from 'react-bootstrap'
import React, { useState, useContext } from 'react'
import MyModal from '../modal/modal';
import TemporaryDrawer from '../sidebar/sidebar'
import {context} from '../../App'
const MyNavbar:React.FC = () => {
    const [show, setShow] = useState(false);
    const [TaskNameInput, setTaskNameInput] = useState("");
    const [priority,setPriority] = useState("");
    const [status,setStatus] = useState("");
    const [TaskDetails, setTaskDetails] = useState("")
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const {state, dispatch,copyState, copyDispatch} = useContext(context)
    const handleClose = () => {
        setShow(false);
    };
    const handleSave = ()=>{
        const timeStamp = Date.now()
        dispatch({type:"addTask",payLoad:{id:timeStamp,TaskName:TaskNameInput,TaskPriority:priority,TaskStatus:status,TaskDeadline:selectedDate,TaskDetails:TaskDetails}})
        copyDispatch({type:"addTask",payLoad:{id:timeStamp,TaskName:TaskNameInput,TaskPriority:priority,TaskStatus:status,TaskDeadline:selectedDate,TaskDetails:TaskDetails}})
        setShow(false);
    }
    const handleShow = () => setShow(true);
    const handleSearch = (event:React.ChangeEvent)=>{
        const data = event.target as HTMLInputElement;
        if(data.value==="")
            dispatch({type:"returnCopyState",copiedTasks:[...copyState]})
            // setTasks(copiedTasks)
        else
            dispatch({type:"searchTask",payLoad:data.value,copiedTasks:[...copyState]})
            // setTasks(Tasks.filter((item)=> item.TaskName.startsWith(data.value)))
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
                            <TemporaryDrawer />
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
                         TaskDetails={TaskDetails}
                         setTaskDetails={setTaskDetails}
                         />      
            </Navbar>
        </>
    )
}
export default MyNavbar;
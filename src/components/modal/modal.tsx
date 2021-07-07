import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap'
import TaskInput from '../task-input/TaskInput'
interface IProps {
    show:boolean,
    handleClose:any;
    handleSave:any;
    setTaskNameInput:Function;
    setPriority:Function;
    setStatus:Function;
    setSelectedDate:Function;
    selectedDate:any;
    TaskDetails:string;
    setTaskDetails:Function;
}
const MyModal:React.FC<IProps> = ({show,handleClose,handleSave,setTaskNameInput,setPriority,setStatus,setSelectedDate,selectedDate,TaskDetails,setTaskDetails}) => {
  return (
    <>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <TaskInput setTaskNameInput={setTaskNameInput}
                          setPriority={setPriority}
                          setStatus={setStatus}
                          setSelectedDate={setSelectedDate}
                          selectedDate={selectedDate}
                          TaskDetails={TaskDetails}
                          setTaskDetails={setTaskDetails}
                />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button variant="light" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="primary" onClick={handleSave}>
            SAVE
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal;
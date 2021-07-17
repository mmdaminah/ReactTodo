import { TextField } from '@material-ui/core';
import SelectInput from '../selectInput/SelectInput';
import MaterialUIPickers from '../date-input/DateInput'
interface IProps{
  setTaskNameInput:Function;
  setPriority:Function;
  setStatus:Function;
  setSelectedDate:Function;
  selectedDate:any;
  TaskDetails:string;
  setTaskDetails:Function;
}
const TaskInput:React.FC<IProps> = ({setTaskNameInput,setPriority,setStatus,setSelectedDate,selectedDate,TaskDetails,setTaskDetails}) => {
  const handleTaskChange = (event:React.ChangeEvent)=>{
    const target = event.target as HTMLInputElement; 
    setTaskNameInput(target.value)
  }
  const handleTaskDetailsChange = (event:React.ChangeEvent)=>{
    const target = event.target as HTMLInputElement; 
    setTaskDetails(target.value)
  }
  return (
    <>
      <div>
        <form noValidate autoComplete="off">
          <TextField className="mx-2 my-3" onChange={handleTaskChange} id="outlined-basic" label="Task Name" variant="outlined" />
          <div className="d-flex justify-content-between">
            <SelectInput width={"w-25"} title={"Priority"} items={["Low", "Medium","High"]} setFilter={setPriority}/>
            <SelectInput width={"w-25"} title={"Status"} items={["To do", "Doing", "Done"]} setFilter={setStatus}/>
            <MaterialUIPickers setSelectedDate={setSelectedDate} selectedDate={selectedDate}/>
          </div>
            <TextField
              className="w-100 mx-2 mt-3"
              id="outlined-multiline-static"
              label="Task Details"
              multiline
              rows={4}
              onChange={handleTaskDetailsChange}
              placeholder="Task Details..."
              variant="outlined"
            />
        </form>
      </div>
    </>
  )
}
export default TaskInput;
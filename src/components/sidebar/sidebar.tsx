import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { BsFunnelFill } from "react-icons/bs";
import SelectInput from '../selectInput/SelectInput';
import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

type Anchor = 'left' | 'right';

export default function TemporaryDrawer() {
    const copiedReduxTasks = useSelector((state:any) => state.todo.copiedTasks)
    const reduxDispatch = useDispatch()
    const [priority, setPriority] = useState("All");
    const [status, setStatus] = useState("All");
    const [deadline, setDeadline] = useState("All");
    useEffect(()=>{
        //filters just based on priority
        if(priority !== "All" && status === "All" && deadline === "All")
            reduxDispatch({type:'sidebarFilterPriority',payLoad:priority,copiedTasks:copiedReduxTasks})
        //filters just based on status
        else if(status !== "All" && priority === "All" && deadline === "All")
            reduxDispatch({type:'sidebarFilterStatus',payLoad:status,copiedTasks:copiedReduxTasks})
        //filters just based on deadline
        else if(deadline !== "All" && priority === "All" && status === "All")
            reduxDispatch({type:"sidebarFilterDeadline",payLoad:filterByDeadline()})
        //filters based on priority and status
        else if(status !== "All" && priority !== "All" && deadline === "All")
            reduxDispatch({type:"sidebarFilterPriorityStatus", payLoad:[priority,status],copiedTasks:copiedReduxTasks})
        //filters based on priority and deadline
        else if(status === "All" && priority !== "All" && deadline !== "All")
            reduxDispatch({type:"sidebarFilterPriority",payLoad:priority,copiedTasks:filterByDeadline()})
        //filters based on status and deadline
        else if(status !== "All" && priority === "All" && deadline !== "All")
            reduxDispatch({type:"sidebarFilterStatus",payLoad:status,copiedTasks:filterByDeadline()})    
        //filters based on all options
        else if(deadline !== "All" && priority !== "All" && status !== "All")
            reduxDispatch({type:"sidebarFilterPriorityStatus",payLoad:[priority,status],copiedTasks:filterByDeadline()})
        //filters no item
        else if(deadline === "All" && priority == "All" && status === "All")
            reduxDispatch({type:"returnCopyState",copiedTasks:copiedReduxTasks})
    },[deadline,priority,status])
    const filterByDeadline = ()=>{
        if(deadline === 'Overdue' )
            return copiedReduxTasks.filter((item:any)=> item.TaskDeadline.getDate() < new Date().getDate())
        else if(deadline === 'For the future')
            return copiedReduxTasks.filter((item:any)=> item.TaskDeadline.getDate() > new Date().getDate())
        else if(deadline === 'For today')
            return copiedReduxTasks.filter((item:any)=> item.TaskDeadline.getDate() === new Date().getDate())
    }
    const classes = useStyles();
    const [Nstate, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setState({ ...Nstate, [anchor]: open });
    };

    const list = (anchor: Anchor) => (
        <div role="presentation">
            <List>
                <ListItem>
                    <h1>Todo Filter</h1>
                </ListItem>
                <ListItem button key={"Priority"}>
                    <SelectInput width={"w-100"} title={"Priority"} items={["All","Low", "Medium","High"]} setFilter={setPriority}/>
                </ListItem>
                <ListItem button key={"Status"}>
                    <SelectInput width={"w-100"} title={"Status"} items={["All","To do", "Doing", "Done"]} setFilter={setStatus}/>
                </ListItem>
                <ListItem button key={"Deadline"}>
                    <SelectInput width={"w-100"} title={"Deadline"} items={["All", "Overdue", "For today", "For the future"]} setFilter={setDeadline}/>
                </ListItem>
            </List>
            <Divider />
        </div>
    );
    return (
        <div>
            <React.Fragment key={'right'}>
                <BsFunnelFill className="mx-2" style={{ width: "25px", height: "25px" }} onClick={toggleDrawer('right', true)} />
                <Drawer anchor={'right'} open={Nstate['right']} onClose={toggleDrawer('right', false)}>
                    {list('right')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}

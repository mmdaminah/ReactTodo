import { InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';
import React from 'react';
interface IProps{
    title:string;
    items:string[];
    setFilter:any;
    width:string;
}
const SelectInput:React.FC<IProps> = ({title, items,setFilter,width}) => {
    const handleChange = (event:any)=>{
        const target = event.target as HTMLSelectElement; 
        setFilter(target.value)
    }
    return (
        <FormControl variant="outlined" className={width}>
            <InputLabel id="demo-simple-select-outlined-label">{title}</InputLabel>
            <Select className="mx-2"
                name={title}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="Age"
                onChange={handleChange}
            >
                {
                    items.map((item)=>{
                        return(
                            <MenuItem value={item}>{item}</MenuItem>
                        )
                    })
                }
            </Select>
        </FormControl>
    )
}
export default SelectInput;
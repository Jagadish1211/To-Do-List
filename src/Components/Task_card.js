import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


function Taskcard(props){
    return(
        <div className= "line-item">
            <div>
                {props.task}
            </div>
            <div>
            <button className="edit" >Edit</button>
            </div>
            <div>
            <IconButton aria-label="delete" size="small">
            <DeleteIcon />
            </IconButton>
            </div>
        </div>
    )
}

export default Taskcard;
import React from 'react'
import classes from './Button.module.css';

const Button=(props)=>{
    return(
        <button onClick={props.handleUpdate} type={props.type} className={props.width=="full"?`${classes.Button} ${classes.Full}`:classes.Button}>
        {props.label}
        </button>
    )
}

export default Button;
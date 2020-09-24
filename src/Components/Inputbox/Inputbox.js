import React from 'react'
import classes from './Inputbox.module.css';

const InputBox=(props)=>{
    return(
        <div className={props.width=="full"?`${classes.InputBoxDiv} ${classes.Full}`:classes.InputBoxDiv}>
            <p className={props.class}>{props.label}</p>
            <input onChange={props.handleInput} name={props.name} className={classes.InputBox} type={props.type} value={props.value} required/>
        </div>
    )
}

export default InputBox;
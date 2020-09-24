import React from 'react'
import classes from './Menuitem.module.css';

const Menuitem=(props)=>{
    return(
        <div className={props.active?classes.Active:classes.Menuitem}>
            <i className={props.class}></i>
            <p>{props.label}</p>
        </div>
    )
}

export default Menuitem;
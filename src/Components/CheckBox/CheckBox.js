import React from 'react';
import classes from './CheckBox.module.css'

const CheckBox=(props)=>{
  return (
    <div className={props.checked?`${classes.Checked} ${classes.CheckBox}`:classes.CheckBox} onClick={props.handleToggle}>
    <i className="fas fa-check"></i>
    </div>
  )

  }

export default CheckBox;

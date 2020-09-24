import React from 'react';
import classes from './DeleteIcon.module.css'

const DeleteIcon=(props)=>{
  return (
    <div className={props.opacity=="light"?`${classes.DeleteIconWrapper} ${classes.Light}`:classes.DeleteIconWrapper} onClick={props.handleDelete}>
    <i className="far fa-trash-alt"></i>
    </div>
  );

  }

export default DeleteIcon;

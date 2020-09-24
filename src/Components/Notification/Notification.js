import React from 'react'
import classes from './Notification.module.css';

const Notification=(props)=>{
    return(
        <div className={classes.Notification}>
            <div>
                <img src={props.image}/>
            </div>
            <div>
                <p>{props.message}</p>
                <span>{`${props.time} ago.`}</span>
            </div>
        </div>
    )
}

export default Notification;
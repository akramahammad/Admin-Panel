import React from 'react'
import classes from './Notification.module.css';

const NotificationRow=(props)=>{
    return(
        <tr className={classes.Row}>
            <td>{`#${props.order.orderNo}`}</td>
            {["Moving","Delivered"].indexOf(props.order.status)>-1?<td className={classes.StatusRow}><div><i className={`fas fa-circle ${classes.Green}`}></i>{props.order.status}</div></td>:(["Cancelled"].indexOf(props.order.status)>-1?<td className={classes.StatusRow}><div><i className={`fas fa-circle ${classes.Red}`}></i>{props.order.status}</div></td>:<td className={classes.StatusRow}><div><i className={`fas fa-circle ${classes.Yellow}`}></i>{props.order.status}</div></td>)}
            <td>{props.order.operators}</td>
            <td>{props.order.location}</td>
            <td>{props.order.distance}</td>
            <td>{props.order.startDate}</td>
            <td>{props.order.deliveryDate}</td>
        </tr>
    )
}

export default NotificationRow;
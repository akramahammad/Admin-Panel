import React from 'react'
import CheckBox from '../CheckBox/CheckBox';
import DeleteIcon from '../DeleteIcon/DeleteIcon';
import classes from './TableRow.module.css';

const TableRow=(props)=>{
    return(
        <tr>
            <td><CheckBox handleToggle={props.handleToggle} checked={props.product.checked} /></td>
            <td>{props.product.name}</td>
            <td>{props.product.unitSold}</td>
            <td>{props.product.stock}</td>
            <td>{props.product.expireDate}</td>
            <td><DeleteIcon handleDelete={props.handleDelete}/></td>
        </tr>
    )
}

export default TableRow;
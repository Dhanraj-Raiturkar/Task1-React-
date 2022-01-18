import React from 'react'
import classes from './ListItem.module.css'
import {FaCheck} from 'react-icons/fa'
import {MdDeleteForever} from 'react-icons/md'

const ListItem = (props) => {

    const onCheckClick = (e) => {
        props.onCheck(props.item);
    }

    const onDeleteClick = (e) => {
        props.onDelete(props.item);
    }

    return (
        <li className={classes.listItem}>
            {props.item.checked ? <strike>{props.item.text}</strike> : <>{props.item.text}</>}
            <MdDeleteForever onClick={onDeleteClick}style={{height:'0.8em', color:'red', float:'right', paddingTop:'1%', margin:'0px 0.8%', cursor:'pointer', color: 'rgb(187, 59, 59)'}}/>
            <FaCheck onClick={onCheckClick} style={{height:'0.8em', color:'green', float:'right', paddingTop:'1%', margin:'0px 0.8%', cursor:'pointer'}}/>
        </li>
    )
}

export default ListItem

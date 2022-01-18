import React from 'react'
import ListItem from './ListItem'
import classes from './List.module.css'

const List = (props) => {

    const checkHandler = (id) => {
        props.check(id);
    }

    const deleteHandler = (id) => {
        props.delete(id);
    }

    return (
        <ul className={classes.list}>
        {props.items.map((i) => (
          <ListItem key={i.id} item={i} onCheck={checkHandler} onDelete={deleteHandler}/>
        ))}
      </ul>
    )
}

export default List

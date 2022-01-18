import React from 'react'
import classes from './Menu.module.css'

const Menu = (props) => {

    const clearItems = (e) => {
        props.clearList();
    }

    const deletedItems = () => {
        props.deletedList();
    }

    return (
        <div className={classes.menu }>
            <p onClick={clearItems} >Clear  Items</p>
            <p onClick={deletedItems}>Deleted  Items</p>
        </div>
    )
}

export default Menu

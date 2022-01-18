import React from 'react'
import classes from './Title.module.css'

const Title = (props) => {
    return (
        <h2 className={classes.text}>{props.text}</h2>
    )
}

export default Title

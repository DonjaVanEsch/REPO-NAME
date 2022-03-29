import React from 'react'
import styles from '../css/gridsquare.module.css'

// Represents a grid square with a color

export default function GridSquare(props) {
    const styleColor = styles[`color${props.color}`]
    const classes = `${styles.gridsquare} ${styleColor}`
    
    return <div className={classes} />
    //return <div className={`${styles.gridsquare} ${styleColor}`} />
}
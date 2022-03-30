import React from 'react'
import { useSelector } from 'react-redux'
//import styles from '../css/MessagePopup.module.css'

// Displays a message

export default function MessagePopup(props) {
    const isRunning = useSelector((state) => state.game.isRunning )
    const gameOver = useSelector((state) => state.game.gameOver )
    const className = isRunning && !gameOver ? 'hidden' : ''

    let msgText = '';
    msgText = gameOver ? 'Game Over': ''
    msgText = isRunning ? '': 'Paused'    

    return (
        <div className={`messagepopup ${className}`}>        
            <h1>{msgText}</h1>            
        </div>
    )
}
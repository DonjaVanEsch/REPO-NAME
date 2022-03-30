import React from 'react'
import { useSelector } from 'react-redux'
//import styles from '../css/MessagePopup.module.css'

// Displays a message

export default function MessagePopup(props) {
    const isRunning = useSelector((state) => state.game.isRunning )
    const gameOver = useSelector((state) => state.game.gameOver )
    const className = isRunning && !gameOver ? 'hidden' : ''

    let msgText = '';
    msgText = isRunning ? '': 'Paused'
    msgText = gameOver ? 'Game Over': ''

    return (
        <div className={`messagepopup ${className}`}>        
            <h1>Message Title</h1>
            <p>{msgText}</p>
        </div>
    )
}
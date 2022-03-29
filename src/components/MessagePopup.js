import React from 'react'
import styles from '../css/MessagePopup.module.css'

// Displays a message

export default function MessagePopup(props) {
    return (
        <div className={styles.messagepopup}>
            <h1>Message Title</h1>
            <p>Message info...</p>
        </div>
    )
}
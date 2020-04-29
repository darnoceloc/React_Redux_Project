import React from 'react'

import styles from './Experience.module.css'

const experience = (props) => {
    return (
        <div id={styles.experience}>

            <div className={styles.description}>
                <h3>{props.company}</h3>
                <p className={styles.position}>{props.position}</p>
                <p className={styles.date}>{props.date}</p>
                <p className={styles.location} >{props.location}</p>
                <div className={styles.achievement} >{props.children}</div>
            </div>

        </div>
    )
}

export default experience;
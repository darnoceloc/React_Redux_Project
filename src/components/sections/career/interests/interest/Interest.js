import React from 'react'

import styles from "./Interest.module.css";

const interest = (props) => {
    return (
        <div id={styles.interest}>

            <div className={styles.description}>
                <p><i className={props.icon}></i>{props.title}</p>
                <p>{props.description}</p>
                {/* <p className={styles.skills}>{props.skills}</p> */}
            </div>

        </div>
    )
}

export default interest;

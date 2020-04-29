import React from 'react';

import styles from './Subheader.module.css';

const subheader = (props) => {
    return (
        <div id={styles.subheader}>

            <div id={styles['subheader-icon']}>
                <img src={props.icon}/>
            </div>

            <p className={styles.title}>{props.title}</p>
        </div>
    )
}

export default subheader;
import React from 'react';

import styles from './Header.module.css';

const header = (props) => {
    return (
        <div className={styles.header}>
            {/* <img className={styles.icon} src={props.icon}/> */}
            <p className={styles.title}>{props.title}</p>
            {/* <p className={styles.subtitle}>{props.subtitle}</p> */}
        </div>
    )
}

export default header;
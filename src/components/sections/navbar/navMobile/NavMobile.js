import React from 'react';

import NavLinks from '../navLinks/NavLinks'

import styles from './NavMobile.module.css';

const navMobile = (props) => {
    return (
        <div id={styles[props.navMobileClass]}>
            
            <div 
                id={styles.toggleButton}
                onClick={props.buttonClick}
            >
                <i className={props.navMobileIcon}></i>
            </div>

            <div id={styles.navLinks}>
                <NavLinks/>
            </div>

        </div>
    )
} 

export default navMobile;
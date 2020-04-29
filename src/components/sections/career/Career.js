import React from 'react'

import Header from '../../common/header/Header';

import Interests from './interests/Interests'
import Experiences from './experiences/Experiences'

import styles from "./Career.module.css";

const career = () =>{

    return (
        <div id={styles.career}>

            {/* -------------- INTERESTS -------------- */}
            <div><Interests/></div>

            {/* -------------- EXPERIENCE -------------- */}
            <div><Experiences/></div>
            

        </div>
    )
}

export default career;

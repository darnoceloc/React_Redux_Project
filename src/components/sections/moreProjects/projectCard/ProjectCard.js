import React from 'react';

import styles from './ProjectCard.module.css'

const projectCard = (props) => {

    return (
        <div className={styles.card}>
            <div className={styles.icon}>
                <img src='https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png'/>
            </div>
            <h3 className={styles.name}>{props.name}</h3>
            <p className={styles.platform}>{props.platform}</p>
            <p className={styles.description}>{props.description}</p>
            {/* <ul className={styles.techs}>
                <li>Java</li>
                <li>MongoDB</li>
                <li>React</li>
            </ul> */}

            <div className={styles.links}>

                {props.liveLink === 'null' ? null : (
                    <a href={props.liveLink} target="_blank">
                        <i className="fas fa-external-link-alt"></i>
                    </a>
                ) }



                <a href={props.gitLink} target="_blank">
                    <i className="fab fa-github"></i>
                </a>
            </div>

        </div>
    )
}

export default projectCard;
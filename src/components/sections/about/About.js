import React from 'react'


import Socials from '../../common/socials/Socials';
import Button from '../../common/button/Button';

import portrait from '../../../img/about/portrait.png'
import portrait2 from '../../../img/about/portrait2.png'


import styles from './About.module.css'

const about = () => {
    return (
        <div className={styles.content}>

            <div className={styles.details}>
                <div className={styles.bio}>
                    <p>
                        Enthusiastic Computer Engineering student at the University of Florida 
                        with interests in web technologies, mobile development, UI/UX design, 
                        machine learning and a passion for anything technology related. During 
                        my free time I like to read tech articles, watch tech videos on YouTube, 
                        play video games, or I often use those times to acquire more knowledge in 
                        hardware design and software development.
                    </p>
                </div>

                <div className={styles.skill}>
                    <p>Some of the technologies that I've been working with include:</p>
                    <ul className={styles.skills}>
                        <li><i className="fab fa-js-square"></i>JavaScript (ES5+)</li>
                        <li><i className="fab fa-react"></i>React (JS/Native)</li>
                        <li><i className="fab fa-html5"></i>HTML5</li>
                        <li><i className="fab fa-css3-alt"></i>CSS and SCSS</li>
                        <li><i className="far fa-file-code"></i>Swift</li>
                        <li><i className="fab fa-node-js"></i>NodeJS</li>
                        <li><i className="far fa-file-code"></i>Express.js</li>
                        <li><i className="fas fa-database"></i>MongoDB</li>
                        <li><i className="far fa-file-code"></i>GraphQL</li>
                    </ul>
                </div>

                {/* <div id={styles.socialIcons}> */}
                    <Socials/>
                    {/* <ul className={styles.buttons}>
                        <li><Button>Resume</Button></li>
                        <li><Button>Contact</Button></li>
                    </ul> */}
                {/* </div> */}
            </div>

            <div className={styles.portrait}>
                <img src={portrait} alt="Alexander's Portrait"/>
            </div>
            
        </div>

    )
}

export default about;

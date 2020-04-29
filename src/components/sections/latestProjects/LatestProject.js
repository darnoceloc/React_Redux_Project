import React from 'react'

import Button from '../../common/button/Button';
import styles from './LatestProjects.module.css'

import giftyScreen from '../../../img/projects/gifty.png';

const latestProjects = (props) => {
    return (
        <div>
            {/* <div className={styles.content}>
                <div className={styles.details}>
                    <div className={styles.title}>
                        <p className={styles.title}><i className='fas fa-gift'></i><span>Gifty (Tentative Name)</span></p>
                    </div>

                    <p className={styles.intro}>Making it easier to help your favorite charity organizations</p>

                    <div className={styles.description}>
                        <p> Donation mobile application that facilitates charity organizations’ funding needs. 
                            The company adds Items, or funding amount needed, in order for users to pay for them directly 
                            through the app, and including the corresponding shipping and logistics.
                        </p>
                    </div>
                </div>

                <div className={styles.screen}>
                    <img src={giftyScreen} alt="Gifty Screenshots"/>
                </div>
            </div> */}



            <div id={styles.gifty} className={styles.content}>
                <div className={styles.screen}>
                    <img src='https://lexaugustin.github.io/img/projects/today/today-screen.png' alt="Today Screenshot"/>
                </div>
                <div className={styles.details}>
                    <div className={styles.title}>
                        <p className={styles.title}><i className='far fa-sun'></i><span>Today</span></p>
                    </div>

                    <p className={styles.intro}>Weather from your location and Calendar</p>

                    <div className={styles.description}>
                        <p>
                            A simple weather app with a calendar. It shows the weather of the 
                            current location and the current day is highlited with the circle. 
                            The background color changes to light green, orange and bleu based 
                            on the time of the day. I worked on this app after learning how to 
                            use api in iOS development with Swift and the Cocoapods libraries. 
                            The weather source is OpenWeatherMap.
                        </p>
                    </div>

                    <div className={styles.links}>
                        {/* <a href="google.com" target="_blank">
                            <p>See More<i className="fas fa-long-arrow-alt-right"></i></p>
                        </a> */}

                        <a href="https://github.com/lexaugustin/today" target="_blank">
                            <p className={styles.igithub}>Github<i className="fab fa-github-alt"></i></p>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default latestProjects;

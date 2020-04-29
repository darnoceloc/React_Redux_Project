import React, {Component} from 'react';

import Experience from './experience/Experience'
import secIcon from '../../../../img/career/experiences/sec.png';
import exxonMobilIcon from '../../../../img/career/experiences/exxonMobil.png';
import visaIcon from '../../../../img/career/experiences/visa.png';

import experiencesIcon from '../../../../img/career/experiences/experiences.svg';

import experienceIcon from '../../../../img/career/experiences/icon.png';
import Subheader from '../../../common/subheader/Subheader';


import styles from './Experiences.module.css'

class Experiences extends Component {

    state = {
        active: 'research'
    }

    setResearch = () => {
        this.setState({
            active: 'research'
        })
    }

    setVisaActive = () => {
        this.setState({
            active: 'visa'
        })
    }

    setExxonActive = () => {
        this.setState({
            active: 'exxon'
        })
    }

    setSECActive = () => {
        this.setState({
            active: 'sec'
        })
    }

    render() {

        var experience = null;

        switch(this.state.active) {
            case ('research'):
                experience = (
                    <Experience
                    company = "University of Florida"
                    position = "Undergraduate Researcher"
                    date = "August 2019 - Present"
                    location="Gainesville, Florida"
                    >
                    <ul>
                        <li>Researching, designing and developing a user interface to facilitate the interaction between humans and the NAO robot </li>
                        <li>Extending functionalities of existing software to further demo the tool to introduce students to robotics</li>
                    </ul>
                    </Experience>
                )
                break;
            
            case ('visa'):
                experience = (
                    <Experience
                    company = "Visa"
                    position = "Software Engineering Intern"
                    date = "June 2019 - August 2019"
                    location="Foster City, California"
                    >
                    <ul>
                        <li>Developed a GraphQL backend service that returns the exacted data requested by the client</li>
                        <li>Reduced the number of HTTP calls to APIs with GraphQL queries on the client-side using Apollo</li>
                        <li>Implemented Redux for better state management and Redux-Saga for better application side-effects management</li>
                    </ul>
                    </Experience>
                )
                break;

            case ('exxon'):
                experience = (
                    <Experience
                    company = "Exxon Mobile"
                    position = "UI/UX Researcher"
                    date = "February 2019 - April 2019"
                    location="Gainesville, Florida"
                    >
                    <ul>
                        <li>Completed the design process of an event web application for the company’s events</li>
                        <li>Interviewed clients to understand their needs, defined user personas, created user stories and generated ideas for the design</li>
                        <li>Created effective wireframes and designed a prototype of the application to show case the output of the research</li>
                    </ul>
                    </Experience>
                )
                break;

            case ('sec'):
                experience = (
                    <Experience
                    company = "Software Engineering Club"
                    position = "Webmaster"
                    date = "September 2018 - December 2019"
                    location="University of Florida"
                    >
                    <ul>
                        <li>Designed and implemented a new website to facilitate the connections with members and sponsors</li>
                        <li>Collaborate with the executive officers to plan activities and determine actions necessary for the growth of the club</li>
                    </ul>
                    </Experience>
                )
                break;
        }

        return (
            <div id={styles.content}>
    
                <div className={styles.icons}>
                    <img src={experiencesIcon}/>
                </div>
    
                <div className={styles.experiences}>
                    <Subheader
                        icon={experienceIcon}
                        title="Experience"
                    />
                    
                    <div className={styles['experiences-content']}>
                        <div className={styles.tabs}>
                            <p onClick={this.setResearch}>UF</p>

                            <p 
                                className={styles.active__tab}
                                // className={this.state.active === 'visa' ? 'styles.active__tab' : ''}
                                onClick={this.setVisaActive}
                            >Visa</p>

                            <p onClick={this.setExxonActive}>ExxonMobil</p>
                            <p onClick={this.setSECActive}>SEC</p>
                        </div>
                        <div>
                            {experience}
                        </div>
                    </div>
                </div>
    
            </div>

        )
    }
}

export default Experiences;
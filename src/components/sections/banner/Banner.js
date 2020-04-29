import React from 'react';

import { Spring } from 'react-spring/renderprops'
import { Transition } from 'react-spring/renderprops'

import portrait from '../../../img/banner/all.png'
import portrait2 from '../../../img/banner/all2.png'
import portrait3 from '../../../img/banner/all3.png'
import Button from '../../common/button/Button';

import styles from './Banner.module.css'

const banner = () => {

    return (
        <div id={styles.banner}>

            <div id={styles['banner-content']}>

                <div id={styles['picture-side']}>
                    <Spring
                        from={{opacity: 0, marginBottom: -500}}
                        to={{opacity: 1, marginBottom: 0}}
                        config={{duration:1000}}
                    >
                        {props => (
                            <div style={props}>
                                <img src={portrait3} alt=""/>
                            </div>
                        )}

                    </Spring>

                    {/* <Transition
                        items={on}
                        from={{ opacity: 0 }}
                        enter={{ opacity: 1 }}
                        leave={{ opacity: 0 }}>
                        {on => on && (props => <div style={props}>✌️</div>)}
                    </Transition> */}
                </div>

                
    
                <div id={styles['text-side']}>
                    <Spring
                        from={{opacity: 0}}
                        to={{opacity: 1}}
                        config={{delay:1000, duration:1000}}
                    >
                        {props => (
                            <div style={props}>
                                <div id={styles['text-side-content']}>
                                    <h2>Computer Engineering Student<span> at The University of Florida</span></h2>
                                    <div id={styles.bar}></div>
                                    <p>With Interests in Web Development, Mobile Development, UI/UX Design and Machine Learning.</p>

                                    {/* <div id={styles.contact__button}><Button>Contact</Button></div> */}
                                </div>
                            </div>
                        )}

                    </Spring>
                </div>

            </div>
        </div>
    )
}

export default banner;
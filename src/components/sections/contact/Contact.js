import React, {Component} from 'react';

import { Spring } from 'react-spring/renderprops'

import Button from '../../common/button/Button';
import Socials from '../../common/socials/Socials';
import portrait2 from '../../../img/banner/footer.png'


import styles from './Contact.module.css'

class Contact extends Component {
    render(){
        return (
            <div id={styles.content}>

                <div id={styles.socialIcons}>
                    <Socials/>



                    {/* <Spring
                        from={{opacity: 0, marginBottom: -500}}
                        to={{opacity: 1, marginBottom: 0}}
                        config={{duration:10000}}
                        >
                        {props => ( */}
                            <div>
                                <img id={styles['picture']} src={portrait2} alt=""/>
                            </div>
                    {/* //     )}
                    // </Spring> */}

                    {/* <div id={styles['picture']}> */}
                        {/* <img id={styles['picture']} src={portrait2} alt=""/> */}
                    {/* </div> */}

                </div>

            </div>
        )
    }
}


export default Contact;


{/* <Spring
    from={{opacity: 0, marginBottom: -500}}
    to={{opacity: 1, marginBottom: 0}}
    config={{duration:1000}}
    >
    {props => (
        <div style={props}>
            <img src={portrait3} alt=""/>
        </div>
    )}
</Spring> */}


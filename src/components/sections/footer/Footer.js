import React from 'react'

import Socials from '../../common/socials/Socials'

import styles from './Footer.module.css'

const footer = () => {
    return (
        <footer id={styles.footer}>
            
            {/* ============= T O P ============= */}
            <div id={styles.top}>
                
                <div id={styles.contact}>
                    <img id={styles.logo} src="https://lexaugustin.github.io/img/logo/logo-white.svg"/>
                    <p>lexaugustin@gmail.com</p>
                    {/* <div id={styles.socialIcons}><Socials/></div> */}
                </div>

                <div id={styles.menu}>
                    <h4>MENU</h4>
                    <ul>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Career</li>
                        <li>Contact</li>
                    </ul>
                </div>
                
                <div id={styles.academic}>
                    <p>Webmaster for the <a href="http://ufsec.com/">Software Engineering Club</a></p>
                    <p>Computer Engineering</p>
                    <p>University of Florida</p>
                </div>
            </div>


            {/* ========= D I V I D E R ========= */}
            <hr></hr>


            {/* ========== B O T T O M ========== */}
            <div id={styles.bottom}>
                <span><p>Made With<span><i className="fas fa-heart"></i></span>By Alexander</p></span>
                <span><p>© 2019 Alexander Augustin. All rights reserved</p></span>
            </div>

        </footer>
    )
}

export default footer;
import React, { Component } from 'react';

import NavSections from './navLinks/NavLinks';
import NavMobile from './navMobile/NavMobile';

import styles from './Navbar.module.css';

export default class Navbar extends Component {

    state = {
        scrolled: false,
        navClassName: 'navTop',
        navMobile: 'navClose',
        navMobileIcon: 'fas fa-equals'
    }
    

    navMobileToggleHandler = () => {
        if(this.state.navMobile == 'navClose') {
            this.setState({
                navMobile: 'navOpen',
                navMobileIcon: 'fas fa-times'
            });
        }

        else {
            this.setState({
                navMobile: 'navClose',
                navMobileIcon: 'fas fa-equals'
            });
        }
    }

    // -------- Navbar Scrolling --------
    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== true){
                this.setState({scrolled: true, navClassName: 'navScrolling', });
            } else {
                this.setState({scrolled: false, navClassName: 'navTop'});
            }
        });
    }

    render() {

        return (
            <div>

                <div id={styles.navbar} className={styles[this.state.navClassName]}>
                    <a href='\'><img src="https://lexaugustin.github.io/img/logo/logo-bleu.svg"/></a>
                    <div><NavSections/></div>
                </div>

                <div id={styles.navMobile}>
                    <NavMobile
                        navMobileClass = {this.state.navMobile}
                        navMobileIcon = {this.state.navMobileIcon}
                        buttonClick = {this.navMobileToggleHandler}
                    />
                </div>

            </div>
        )
    }
}

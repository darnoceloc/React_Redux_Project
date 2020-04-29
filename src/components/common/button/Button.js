import React from 'react';

import styles from './Button.module.css';

const button = (props) => <a href={props.link}><button id={styles.button}>{props.children}</button></a>

export default button;
import React from 'react';
import styles from './Footer.module.css';

const styles1 = {textAlign: 'center', color: 'red', fontSize: '25px'};
const styles2 = {textAlign: 'center', color: '#1E90FF', fontSize: '25px'};
const isAdmin = false;

class Footer extends React.Component {
    render() {
        return(
            <div className={styles.footerBlock}>
                <h3 style={isAdmin ? styles1 : styles2}>footer</h3>
            </div>
        )
    }
}

export default Footer;
import React from 'react';
import styles from './Header.module.scss';
import cornerSquiggles from './cornerSquiggles.svg';
import * as Unicons from '@iconscout/react-unicons';

const Header = () => {
    return (
        <header className={styles.Header}>
            <div className={styles.headerText}>
                <h1 className={styles.headerTitle}>Cristina</h1>
                <h1 className={styles.headerTitle}>Peña</h1>
                <h2 className={styles.headerSubtitle}> <Unicons.UilPen color="#1c5765"/> Technical Writer</h2>
                <h2 className={styles.headerSubtitle}><Unicons.UilCog color="#e8623f"/> UX Engineer</h2>
                <h2 className={styles.headerSubtitle}><Unicons.UilGraduationCap color="#c63e45"/> Developer Educator</h2>
            </div>
            <img src={cornerSquiggles} alt="" aria-hidden={true} className={styles.cornerSquiggles}/>
        </header>
    )
}

export default Header;
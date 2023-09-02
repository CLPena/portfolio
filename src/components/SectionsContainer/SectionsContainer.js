import React from 'react';
import styles from './SectionsContainer.module.scss';
import ContactSection from '../ContactSection/ContactSection';
import AboutMeSection from '../AboutMeSection/AboutMeSection';
import MyWorkSection from '../MyWorkSection/MyWorkSection';
import EducationSection from '../EducationSection/EducationSection';

const SectionsContainer = () => {
    return (
        <div className={styles.SectionsContainer}>
            <AboutMeSection />
            <MyWorkSection />
            <EducationSection />
            <ContactSection />
        </div>
    )
}

export default SectionsContainer;
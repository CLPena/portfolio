import React from 'react';
import styles from './EducationSection.module.scss';
import SectionLayout from '../SectionLayout/SectionLayout';
import book from './book.svg';

const EducationSection = () => {
    return (
        <SectionLayout
            header="Education"
            iconSrc={book}
            iconAltText="Book illustration"
        >
            <div className={styles.educationContainer}>
                <div className={styles.educationCard}>
                    <h3 className={styles.educationCardTitle}>Turing School of Software & Design</h3>
                    <p className={styles.educationCardText}>Front End Engineering | 2020 | Denver, CO</p>
                </div>
                <div className={styles.educationCard}>
                    <h3 className={styles.educationCardTitle}>Columbia University Teachers College</h3>
                    <p className={styles.educationCardText}>M.A. in Teaching of English | 2017 | New York, NY</p>
                </div>
                <div className={styles.educationCard}>
                    <h3 className={styles.educationCardTitle}>Hampshire College</h3>
                    <p className={styles.educationCardText}>B.A. in Creative Writing | 2014 | Amherst, MA</p>
                </div>
            </div>
        </SectionLayout>
    )
}

export default EducationSection;
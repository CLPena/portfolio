import React from 'react';
import styles from './ContactSection.module.scss';
import SectionLayout from '../SectionLayout/SectionLayout';
import * as Unicons from '@iconscout/react-unicons';
import hand from './hand.svg';

const ContactSection = () => {
    return (
        <SectionLayout
            header="Contact"
            iconSrc={hand}
            iconAltText="A waving hand illustration"
        >
            <div className={styles.contactWrapper}>
                <ul className={styles.contactList}>
                    <li>
                        <a href="https://www.linkedin.com/in/cristinalpena/" className={styles.contactLink} aria-label="LinkedIn Profile">
                            <Unicons.UilLinkedin />
                            CristinaLPena
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/CLPena" className={styles.contactLink} aria-label="GitHub Profile">
                            <Unicons.UilGithub />
                            CLPena
                        </a>
                    </li>
                    <li>
                        <a href="mailto:CristinaLPena@gmail.com" className={styles.contactLink}>
                            <Unicons.UilEnvelope />
                            CristinaLPena@gmail.com
                        </a>
                    </li>
                </ul>
            </div>
        </SectionLayout>
    )
}

export default ContactSection;
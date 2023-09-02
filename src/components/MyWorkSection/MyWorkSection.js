import React from 'react';
import styles from './MyWorkSection.module.scss';
import SectionLayout from '../SectionLayout/SectionLayout';
import ResumePDF from './CLPenaResume.pdf';
import lightbulb from './lightbulb.svg';
import * as Unicons from '@iconscout/react-unicons';

const MyWorkSection = () => {
    return (
        <SectionLayout
            header="My Work"
            iconSrc={lightbulb}
            iconAltText="Lightbulb illustration"
        >
            <h3 className={styles.myWorkTitle}>
                Vivian Health | UX Engineer | 2020 - Present
            </h3>
            <h4 className={styles.myWorkSubtitle}>Design Systems</h4>
            <p className={styles.myWorkText}>
                As a dedicated UX Engineer at Vivian Health, I've played an instrumental
                role in creating an extensive library of reusable React and React Native
                components, fostering a harmonious partnership between design and
                engineering. I approach my work with a strong emphasis on empathy, consistently
                upholding design principles and accessibility standards. These efforts have led
                to increased velocity for both developers and designers, while also fostering
                collaboration and ensuring inclusivity.
            </p>
            <p className={styles.myWorkText}>
                Because Vivian Health is a private repository, I am unable to share specific
                code samples publicly.
                {' '}
                <a
                    href="https://vivian-storybook.s3.amazonaws.com/master/index.html?path=/docs/algolia-experimentaljobcard--example"
                    className={styles.storybookLink}    
                >
                    You can check out our web component library and UI documentation on Storybook here.
                </a>
            </p>
            <h4 className={styles.myWorkSubtitle}>Accessibility</h4>
            <p className={styles.myWorkText}>
                A champion of accessibility, I've spearheaded initiatives for mobile and web,
                establishing comprehensive code standards, writing detailed documentation, and hosting
                educational sessions for developers. 
            </p>
            <h4 className={styles.myWorkSubtitle}>Front End Engineering</h4>
            <p className={styles.myWorkText}>
                Before joining Vivian's UX engineering team, I significantly contributed as a
                front end engineer from 2020-2021, optimizing interfaces and conducting thorough code reviews.
                This background enriches my holistic approach to UX and design systems work.
            </p>
            <a href={ResumePDF} target="_blank" rel="noreferrer" className={styles.resumeLink}>
                <Unicons.UilFile />
                View resume
            </a>
        </SectionLayout>
    )
}

export default MyWorkSection;
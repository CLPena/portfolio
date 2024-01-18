import React from 'react';
import styles from './MyWorkSection.module.scss';
import SectionLayout from '../SectionLayout/SectionLayout';
import ResumePDF from './CLPenaResume.pdf';
import PortfolioPDF from './CLPenaTechnicalWritingSamples.pdf';
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
            <h4 className={styles.myWorkSubtitle}>Technical Writing</h4>
            <p className={styles.myWorkText}>
                As a UX Engineer, I'm particularly excited about my technical writing contributions, with an
                extensive track record of writing comprehensive documentation for design system tokens and
                components. I've created clear and user-friendly guides for varied audiences (both technical
                and non-technical) covering topics from component usage to typography guides to accessibility
                best practices. Examples of my work can be found in our web component library on 
                {' '}
                <a
                    href="https://vivian-storybook.s3.amazonaws.com/master/index.html"
                    className={styles.storybookLink}    
                >
                Storybook
                </a>
                {' '}
                or in my technical writing portfolio. I hope to highlight my core skills in these examples,
                showcasing my dedication to creating documentation that fosters seamless cross-functional
                collaboration between teams.
            </p>
            <a href={PortfolioPDF} target="_blank" rel="noreferrer" className={styles.portfolioLink}>
                <Unicons.UilFile />
                View portfolio
            </a>
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
                    href="https://vivian-storybook.s3.amazonaws.com/master/index.html"
                    className={styles.storybookLink}    
                >
                    You can check out our web component library and UI documentation on Storybook here.
                </a>
                {' '}
                On Storybook,
                {' '}
                <a href="https://vivian-storybook.s3.amazonaws.com/master/index.html?path=/docs/base-modal--basic-modal" className={styles.storybookLink}>
                    Modal,
                </a>
                {' '}
                <a href="https://vivian-storybook.s3.amazonaws.com/master/index.html?path=/docs/base-dialog--basic-dialog" className={styles.storybookLink}>
                    Dialog,
                </a>
                {' '}
                <a href="https://vivian-storybook.s3.amazonaws.com/master/index.html?path=/docs/base-toast--basic-toast" className={styles.storybookLink}>
                    Toast,
                </a> 
                {' '}
                   and
                {' '}
                <a href="https://vivian-storybook.s3.amazonaws.com/master/index.html?path=/docs/base-menu--basic" className={styles.storybookLink}>
                    Menu
                </a>
                {' '}
                are good examples of my recent work.
            </p>
            <h4 className={styles.myWorkSubtitle}>Learning and Development</h4>
            <p className={styles.myWorkText}>
                Leveraging my extensive background in secondary and adult education, I have established a role as an educator on the UX engineering team.
                I particularly enjoy distilling complex technical subjects into clear instructional materials and presentations for developers
                and designers. I prioritize delivering an engaging curriculum, ensuring that content is appropriate for diverse audiences and learning styles.
            </p>
            <h4 className={styles.myWorkSubtitle}>Accessibility</h4>
            <p className={styles.myWorkText}>
                Web accessibility is a core motivator in my work. As such, I've lead initiatives with both mobile and web teams,
                creating in-depth code standards, writing detailed documentation, and hosting
                educational sessions for developers. In design reviews, I maintain a keen eye for accessibility pitfalls
                and provide thoughtful, constructive feedback helping designers update their designs to meet all accessibility standards.
            </p>
            <h4 className={styles.myWorkSubtitle}>Front End Engineering</h4>
            <p className={styles.myWorkText}>
                Before joining Vivian's UX engineering team, I contributed significantly as a
                front end engineer from 2020-2021, where I implemented various user-facing features, working collaboratively with back end engineers,
                This background informs my holistic approach to my role as a UX engineer.
            </p>
            <a href={ResumePDF} target="_blank" rel="noreferrer" className={styles.resumeLink}>
                <Unicons.UilFile />
                View resume
            </a>
        </SectionLayout>
    )
}

export default MyWorkSection;
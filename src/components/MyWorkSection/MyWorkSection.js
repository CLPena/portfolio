import React from 'react';
import styles from './MyWorkSection.module.scss';
import SectionLayout from '../SectionLayout/SectionLayout';
import PortfolioPDF from './TechnicalWritingPortfolioCLPena.pdf';
import DeveloperEducationPDF from './DeveloperEducationPortfolioCLPena.pdf';
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
                As a UX Engineer, I have made significant contributions through technical writing, with a
                strong focus on creating comprehensive documentation for design system tokens and components.
                I develop clear and user-friendly guides for varied audiences (both technical
                and non-technical) covering topics such as component usage, typography, and accessibility best practices.
            </p> 
            <p className={styles.myWorkText}>
                Examples of my work can be found in our web component library on 
                {' '}
                <a
                    href="https://vivian-storybook.s3.amazonaws.com/master/index.html"
                    className={styles.storybookLink}
                    target="_blank"
                    rel="noopener noreferrer"    
                >
                Storybook
                </a>
                {' '}
                or in my 
                {' '}
                <a
                    href={PortfolioPDF}
                    className={styles.storybookLink}
                    target="_blank"
                    rel="noopener noreferrer"    
                >
                technical writing portfolio.
                </a>
                {' '}
                These examples highlight my core skills and dedication to crafting documentation that promotes seamless cross-functional collaboration.
            </p>
            <a href={PortfolioPDF} target="_blank" rel="noreferrer" className={styles.portfolioLink}>
                <Unicons.UilFile />
                View technical writing portfolio
            </a>
            <h4 className={styles.myWorkSubtitle}>Developer Education</h4>
            <p className={styles.myWorkText}>
                Leveraging my extensive background in secondary and adult education, I have established a role as an educator on the UX engineering team.
                I particularly enjoy distilling complex technical subjects into clear instructional materials and presentations for developers
                and designers. I prioritize delivering an engaging curriculum, ensuring that content is appropriate for diverse audiences and learning styles.
            </p> 
            <p className={styles.myWorkText}>
                Samples and recordings of presentations can be viewed in my portfolio below.
            </p>
            <a href={DeveloperEducationPDF} target="_blank" rel="noreferrer" className={styles.portfolioLink}>
                <Unicons.UilFile />
                View developer education portfolio
            </a>
            <h4 className={styles.myWorkSubtitle}>Design Systems</h4>
            <p className={styles.myWorkText}>
                As a dedicated UX Engineer at Vivian Health, I've played an instrumental
                role in creating an extensive library of reusable React and React Native
                components, fostering a harmonious partnership between design and
                engineering. I approach my work with a strong emphasis on empathy, consistently
                upholding design principles and accessibility standards. These efforts have led
                to increased velocity for developers and designers, while also facilitating
                collaboration and ensuring inclusivity.
            </p>
            <p className={styles.myWorkText}>
                Because Vivian Health is a private repository, I am unable to share specific
                code samples publicly.
                {' '}
                <a
                    href="https://vivian-storybook.s3.amazonaws.com/master/index.html"
                    className={styles.storybookLink}
                    target="_blank"
                    rel="noopener noreferrer"    
                >
                    You can check out our web component library and UI documentation on Storybook here.
                </a>
                {' '}
                On Storybook,
                {' '}
                <a
                    href="https://vivian-storybook.s3.amazonaws.com/master/index.html?path=/docs/base-modal--basic-modal"
                    className={styles.storybookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Modal,
                </a>
                {' '}
                <a
                    href="https://vivian-storybook.s3.amazonaws.com/master/index.html?path=/docs/base-dialog--basic-dialog"
                    className={styles.storybookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Dialog,
                </a>
                {' '}
                <a
                    href="https://vivian-storybook.s3.amazonaws.com/master/index.html?path=/docs/base-toast--basic-toast"
                    className={styles.storybookLink}
                    target="_blank"
                    rel="noopener noreferrer"    
                >
                    Toast,
                </a> 
                {' '}
                   and
                {' '}
                <a
                    href="https://vivian-storybook.s3.amazonaws.com/master/index.html?path=/docs/base-menu--basic"
                    className={styles.storybookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Menu
                </a>
                {' '}
                are good examples of my recent work.
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
        </SectionLayout>
    )
}

export default MyWorkSection;
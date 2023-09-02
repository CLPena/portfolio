import React from 'react';
import SectionLayout from "../SectionLayout/SectionLayout";
import sparkles from './sparkles.svg';
import './AboutMeSection.scss';

const AboutMeSection = () => {
    return (
        <SectionLayout
            header="About"
            iconSrc={sparkles}
            iconAltText="Sparkles illustration"
        >
            <p className="aboutMeText">
                Hi! I'm a UX Engineer passionate about design systems, UI component
                libraries, and optimizing cross-functional collaboration.
                I'm driven by empathy to create user-friendly and accessible software,
                because the best products leave no one behind. When I'm away from my keyboard,
                you can find me traveling, reading, or snuggling my three dogs.
            </p>
        </SectionLayout>
    )
}

export default AboutMeSection;

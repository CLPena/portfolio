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
            Hi! I'm a UX Engineer passionate about design systems, technical writing, learning and development,
            inclusivity, and cross-functional collaboration. I'm driven by empathy to create user-centered and
            accessible component libraries, thorough documentation, and engaging instructional resources.
            Away from my keyboard, you can find me traveling, reading, or snuggling my three dogs.
            </p>
        </SectionLayout>
    )
}

export default AboutMeSection;

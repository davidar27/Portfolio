import React, { memo } from 'react';
import { Header } from '@/components/layouts/Header/Header';
import { Section } from '@/components/sections/Section';
import { useScrollNavigation } from '@/hooks/useScrollNavigation';
import HeroSection from '@/components/pages/Home/Home';
import TechnicalSkillsSection from '@/components/pages/TechnicalSkills/TechnicalSkills';
import SocialSkillsSection from '@/components/pages/SocialSkills/SocialSkills';
import ExperienceSection from '@/components/pages/ExperienceSection/ExperienceSection';
import StudiesSection from '@/components/pages/Estudies/Estudies';
import ContactSection from '../Contact/ContactSection';


export const LandingPage: React.FC = memo(() => {
    const { sectionRefs, scrollToSection } = useScrollNavigation();

    return (
        <div className="landing-page">
            <Header onNavigate={scrollToSection} />

            {/* Hero Section */}
            <Section
                id="home"
                ref={sectionRefs.home}
                title=""
                showParticles={true}
            >
                <HeroSection />
            </Section>

            {/* Technical Skills Section */}
            <Section
                id="technical"
                ref={sectionRefs.technical}
                title="Habilidades Técnicas"
                backgroundGradient="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0a0a0f]"
            >
                <TechnicalSkillsSection />
            </Section>

            {/* Social Skills Section */}
            <Section
                id="social"
                ref={sectionRefs.social}
                title="Habilidades Sociales"
            >
                <SocialSkillsSection />
            </Section>

            {/* Professional Experience Section */}
            <Section
                id="experience"
                ref={sectionRefs.experience}
                title="Experiencia Laboral"
                backgroundGradient="bg-gradient-to-br from-[#16213e] via-[#1a1a2e] to-[#0a0a0f]"
                showParticles={true}
            >
                <ExperienceSection />
            </Section>

            {/* Studies Section */}
            <Section
                id="studies"
                ref={sectionRefs.studies}
                title="Estudios"
                backgroundGradient="bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#16213e]"
            >
                <StudiesSection />
            </Section>

            {/* Contact Section */}
            <Section
                id="contact"
                ref={sectionRefs.contact}
                title="Contacto"
                backgroundGradient="bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#16213e]"
                showParticles={true}
            >
                <ContactSection />
            </Section>
        </div>
    );
});


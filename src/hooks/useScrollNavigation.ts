import { useRef, useCallback, useMemo } from 'react';

interface SectionRefs {
    home: React.RefObject<HTMLElement | null>;
    technical: React.RefObject<HTMLElement | null>;
    social: React.RefObject<HTMLElement | null>;
    experience: React.RefObject<HTMLElement | null>;
    studies: React.RefObject<HTMLElement | null>;
    contact: React.RefObject<HTMLElement | null>;
}

export const useScrollNavigation = () => {
    const homeRef = useRef<HTMLElement>(null);
    const technicalRef = useRef<HTMLElement>(null);
    const socialRef = useRef<HTMLElement>(null);
    const experienceRef = useRef<HTMLElement>(null);
    const studiesRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);

    const sectionRefs: SectionRefs = useMemo(() => ({
        home: homeRef,
        technical: technicalRef,
        social: socialRef,
        experience: experienceRef,
        studies: studiesRef,
        contact: contactRef
    }), []);

    const scrollToSection = useCallback((sectionId: string): void => {
        const ref = sectionRefs[sectionId as keyof SectionRefs];
        if (ref?.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [sectionRefs]);

    return {
        sectionRefs,
        scrollToSection
    };
}; 
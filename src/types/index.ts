export interface BaseSkill {
    icon: React.ReactNode;
    title: string;
    delay: number;
}

export interface TechnicalSkill extends BaseSkill {
    technologies: string[];
}

export interface SocialSkill extends BaseSkill {
    description?: string[];
}

export interface Project {
    icon: string;
    title: string;
    description: string;
    technologies: string[];
    projectUrl?: string;
    githubUrl?: string;
}

export interface Study extends BaseSkill {
    description: string;
}

export interface PersonalInfo {
    title: string;
    avatar: string;
    description: string;
}

export interface SocialLink {
    label: string;
    url: string;
    icon: React.ReactNode;
}

export interface NavItem {
    id: string;
    text: string;
}

export interface Styles {
    mySection: string;
    myTitle: string;
    myContainer: string;
    myColumn: string;
    myIcon: string;
    myTitleColumn: string;
    mytechnologies: string;
    mytechnologiesClassName: string;
    picture: string;
    myDescription: string;
    buttonRedSocial: string;
    iconRedSocial: string;
}

export interface SectionRefs {
    home: React.RefObject<HTMLElement>;
    technical: React.RefObject<HTMLElement>;
    social: React.RefObject<HTMLElement>;
    experience: React.RefObject<HTMLElement>;
    studies: React.RefObject<HTMLElement>;
    contact: React.RefObject<HTMLElement>;
}

export interface NavigationProps {
    onNavigate: (sectionId: string) => void;
} 
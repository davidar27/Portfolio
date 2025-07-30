// Tipos base para habilidades
export interface BaseSkill {
    icon: React.ReactNode;
    title: string;
    delay: number;
}

// Tipos para las habilidades técnicas
export interface TechnicalSkill extends BaseSkill {
    technologies: string[];
}

// Tipos para las habilidades sociales
export interface SocialSkill extends BaseSkill {
    description?: string[];
}

// Tipos para la experiencia profesional
export interface Experience {
    icon: string;
    title: string;
    description: string;
    technologies: string[];
}

// Tipos para los estudios
export interface Study extends BaseSkill {
    description: string;
}

// Tipos para la información personal
export interface PersonalInfo {
    title: string;
    avatar: string;
    description: string;
}

// Tipos para las redes sociales
export interface SocialLink {
    label: string;
    url: string;
    icon: React.ReactNode;
}

// Tipos para la navegación
export interface NavItem {
    id: string;
    text: string;
}

// Tipos para los estilos
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

// Tipos para las referencias de secciones
export interface SectionRefs {
    home: React.RefObject<HTMLElement>;
    technical: React.RefObject<HTMLElement>;
    social: React.RefObject<HTMLElement>;
    experience: React.RefObject<HTMLElement>;
    studies: React.RefObject<HTMLElement>;
    contact: React.RefObject<HTMLElement>;
}

// Tipos para las props de navegación
export interface NavigationProps {
    onNavigate: (sectionId: string) => void;
} 
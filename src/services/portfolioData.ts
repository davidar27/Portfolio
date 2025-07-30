import { TechnicalSkill, SocialSkill, Experience, Study, PersonalInfo, SocialLink } from '@/types';
import React from 'react';
import { FaReact, FaNode, FaGithub, FaCode, FaRobot, FaPython } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import { GiThink } from 'react-icons/gi';
import { MdGroups } from "react-icons/md";
import { AiOutlineRise, AiOutlineSolution } from "react-icons/ai";
import { BiSolidUserDetail } from "react-icons/bi";
import { FaLanguage } from "react-icons/fa";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import MiImage from '@/assets/images/avatar.svg';
import IconDonita from '@/assets/images/icon_donita.jpg';

export class PortfolioDataService {
    static getPersonalInfo(): PersonalInfo {
        return {
            title: "Jhonatan David Arcos Dominguez",
            avatar: MiImage,
            description: "Desarrollador Full Stack con experiencia en la creación de aplicaciones web modernas y eficientes. Especializado en tecnologías frontend como React y TailwindCSS, y con sólidos conocimientos en backend utilizando Node.js, Express y bases de datos como MySQL. Apasionado por resolver problemas complejos y entregar soluciones de alta calidad, siempre enfocado en el aprendizaje continuo y las mejores prácticas de desarrollo.",
        };
    }

    static getTechnicalSkills(): TechnicalSkill[] {
        return [
            {
                icon: React.createElement(FaReact),
                title: "Desarrollador Frontend",
                technologies: ["React", "TypeScript", "Tailwind CSS"],
                delay: 0.3,
            },
            {
                icon: React.createElement(FaNode),
                title: "Desarrollador Backend",
                technologies: ["Node.js", "Express", "C#"],
                delay: 0.4,
            },
            {
                icon: React.createElement(FaGithub),
                title: "Control de Versiones & Despliegue",
                technologies: ["Git", "GitHub", "Clever Cloud"],
                delay: 0.5,
            },
        ];
    }

    static getSocialSkills(): SocialSkill[] {
        return [
            {
                icon: React.createElement(FaRegComments),
                title: "Comunicación efectiva",
                delay: 0.3
            },
            {
                icon: React.createElement(GiThink),
                title: "Pensamiento analítico",
                delay: 0.3
            },
            {
                icon: React.createElement(MdGroups),
                title: "Trabajo en equipo y colaboración",
                delay: 0.3
            },
            {
                icon: React.createElement(AiOutlineRise),
                title: "Aprendizaje continuo y adaptabilidad",
                delay: 0.4
            },
            {
                icon: React.createElement(AiOutlineSolution),
                title: "Resolución de problemas",
                delay: 0.4
            },
            {
                icon: React.createElement(BiSolidUserDetail),
                title: "Atención al detalle",
                delay: 0.4
            },
            {
                icon: React.createElement(FaLanguage),
                title: "Nivel de Ingles",
                description: ["B1"],
                delay: 0.5
            }
        ];
    }

    static getExperiences(): Experience[] {
        return [
            {
                icon: IconDonita,
                title: "Desarrollo Backend - Tienda de Mini Donas",
                description: "Implementación de autenticación, carrito de compras y gestión de productos.",
                technologies: ["TypeScript", "Express", "MySQL", "JWT"],
            },
        ];
    }

    static getStudies(): Study[] {
        return [
            {
                icon: React.createElement(FaCode),
                title: "Técnico en Análisis y Desarrollo de Software",
                description: "SENA",
                delay: 0.3
            },
            {
                icon: React.createElement(FaRobot),
                title: "Pix RTA Basic y Microservicios",
                description: "PIX RPA",
                delay: 0.4
            },
            {
                icon: React.createElement(FaPython),
                title: "Fundamentos de Python 1",
                description: "Cisco",
                delay: 0.5
            }
        ];
    }

    static getSocialLinks(): SocialLink[] {
        return [
            {
                label: "GitHub",
                url: "https://github.com/davidar27",
                icon: React.createElement(FaGithub)
            },
            {
                label: "LinkedIn",
                url: "https://www.linkedin.com/in/jhonatanarcos/",
                icon: React.createElement(FaLinkedin)
            },
            {
                label: "Instagram",
                url: "https://www.instagram.com/david_ar2708",
                icon: React.createElement(FaInstagram)
            },
            {
                label: "Correo Electrónico",
                url: "mailto:jhonatanarcos10@gmail.com",
                icon: React.createElement(FaEnvelope)
            }
        ];
    }
} 
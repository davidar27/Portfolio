import React from 'react';
import MiImage from '../../../assets/images/avatar.svg';
import { Picture } from '../../ui/Picture/Picture';
import { ButtonIcon } from '../../ui/ButtonIcon/ButtonIcon';
import styles from '../../../styles';
import { TiSocialLinkedin } from "react-icons/ti";
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const redSocials = [
    {
        label: "GitHub",
        url: "https://github.com/davidar27",
        icon: <FaGithub />
    },
    {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/davidar27",
        icon: <FaLinkedin />
    },
    {
        label: "Instagram",
        url: "https://www.instagram.com/davidar27",
        icon: <FaInstagram />
    },
    {
        label: "Correo Electrónico",
        url: "mailto:davidar27@gmail.com",
        icon: <FaEnvelope />
    }
];


export const Footer = () => {
    return (
        <footer className="flex items-center justify-around p-4 bg-primary ">

            <a href="https://github.com/davidar27" target="_blank" rel="noopener noreferrer">
                <Picture className={`${styles.picture} !h-16 !w-16`} src={MiImage} />
            </a>

            <div>
                <h2 className={`${styles.myTitle} !m-0 `}>MiPortafolio</h2>
                <p className={`${styles.myDescription} !text-black`}>Concentrado, Tranquilo y Perseverante </p>
            </div>
            <div className="flex gap-4">
                {redSocials.map(({ label, url, icon }, index) => (
                    <ButtonIcon
                        className={styles.buttonRedSocial}
                        key={index}
                        label={label}
                        url={url}
                    >
                        <span className={styles.iconRedSocial}>{icon}</span>
                    </ButtonIcon>
                ))}
            </div>
        </footer>
    );
};
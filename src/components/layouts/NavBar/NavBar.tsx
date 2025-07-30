import React, { useState } from 'react';
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { NavItem } from '@/types';

interface NavBar {
    onNavigate: (sectionId: string) => void;
}

export const NavBar: React.FC<NavBar> = ({ onNavigate }) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const navItems: NavItem[] = [
        { id: 'home', text: 'Inicio' },
        { id: 'technical', text: 'Habilidades Técnicas' },
        { id: 'social', text: 'Habilidades Sociales' },
        { id: 'experience', text: 'Experiencia' },
        { id: 'studies', text: 'Estudios' },
        { id: 'contact', text: 'Contacto' }
    ];

    const handleNavClick = (sectionId: string): void => {
        onNavigate(sectionId);
        setIsMenuOpen(false);
    };

    const styles = {
        nav: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg`,
        container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        navContent: "flex justify-between items-center h-18",
        logo: `text-2xl font-bold transition-colors duration-300 text-gray-900`,
        menuButton: `lg:hidden text-2xl transition-colors duration-300 text-gray-800 hover:text-blue-600`,
        desktopMenu: "hidden lg:flex space-x-8",
        mobileMenu: `lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`,
        navItem: `transition-colors duration-300 cursor-pointer text-gray-700 hover:text-blue-600`,
        mobileNavItem: "block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300"
    };

    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <div className={styles.navContent}>
                    {/* Logo */}
                    <motion.h1
                        className={styles.logo}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        onClick={() => handleNavClick('home')}
                    >
                        Mi Portafolio
                    </motion.h1>

                    {/* Desktop Menu */}
                    <div className={styles.desktopMenu}>
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <button
                                    className={styles.navItem}
                                    onClick={() => handleNavClick(item.id)}
                                >
                                    {item.text}
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={styles.menuButton}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <IoMdClose /> : <HiMenu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={styles.mobileMenu}>
                    <div className="py-2">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                className={styles.mobileNavItem}
                                onClick={() => handleNavClick(item.id)}
                            >
                                {item.text}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}; 
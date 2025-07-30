import React, { useState } from 'react';
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { NavItem, NavigationProps } from '@/types';
import { useScrollHeader } from '@/hooks/useScrollHeader';

const NAV_ITEMS: NavItem[] = [
  { id: 'home', text: 'Inicio' },
  { id: 'technical', text: 'Habilidades Técnicas' },
  { id: 'social', text: 'Habilidades Sociales' },
  { id: 'experience', text: 'Experiencia' },
  { id: 'studies', text: 'Estudios' },
  { id: 'contact', text: 'Contacto' }
];

export const Header: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { isScrolled } = useScrollHeader();

  const handleNavClick = (sectionId: string): void => {
    onNavigate(sectionId);
    setIsMenuOpen(false);
  };

  const styles = {
    nav: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gradient-to-r from-[rgba(10,10,15,0.95)] to-[rgba(26,26,46,0.95)] backdrop-blur-[30px] border-b border-[rgba(110,7,243,0.2)] shadow-2xl' 
        : 'bg-transparent'
    }`,
    container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    navContent: "flex justify-between items-center h-20",
    logo: `text-3xl font-bold transition-all duration-300 cursor-pointer ${
      isScrolled 
        ? 'bg-gradient-to-r from-[#6e07f3] to-[#9945ff] bg-clip-text text-transparent' 
        : 'text-white'
    }`,
    menuButton: `lg:hidden text-2xl transition-colors duration-300 ${
      isScrolled ? 'text-[#6e07f3] hover:text-[#9945ff]' : 'text-white hover:text-[#b366ff]'
    }`,
    desktopMenu: "hidden lg:flex space-x-8",
    mobileMenu: `lg:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-[rgba(10,10,15,0.98)] to-[rgba(26,26,46,0.98)] backdrop-blur-[25px] border-b border-[rgba(110,7,243,0.2)] transition-all duration-300 ${
      isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
    }`,
    navItem: `transition-all duration-300 cursor-pointer font-medium ${
      isScrolled 
        ? 'text-[#e0e0e0] hover:text-[#6e07f3] hover:scale-105' 
        : 'text-white hover:text-[#b366ff] hover:scale-105'
    }`,
    mobileNavItem: "block px-6 py-4 text-[#e0e0e0] hover:text-[#6e07f3] hover:bg-gradient-to-r hover:from-[rgba(110,7,243,0.1)] hover:to-[rgba(153,69,255,0.05)] transition-all duration-300 border-b border-[rgba(255,255,255,0.05)] last:border-b-0"
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
            whileHover={{ scale: 1.05 }}
          >
            Mi Portafolio
          </motion.h1>

          {/* Desktop Menu */}
          <div className={styles.desktopMenu}>
            {NAV_ITEMS.map((item, index) => (
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
          <motion.button
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <IoMdClose /> : <HiMenu />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <div className={styles.mobileMenu}>
          <div className="py-2">
            {NAV_ITEMS.map((item) => (
              <motion.button
                key={item.id}
                className={styles.mobileNavItem}
                onClick={() => handleNavClick(item.id)}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                {item.text}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
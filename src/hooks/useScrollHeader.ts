import { useState, useEffect, useCallback } from 'react';

export const useScrollHeader = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    const handleScroll = useCallback((): void => {
        const scrolled = window.scrollY > 50;
        setIsScrolled(scrolled);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return { isScrolled };
}; 
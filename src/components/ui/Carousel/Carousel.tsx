import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface CarouselProps {
    children: React.ReactNode[];
    itemsPerPage?: number;
    className?: string;
    showArrows?: boolean;
    showDots?: boolean;
    autoPlay?: boolean;
    autoPlayInterval?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
    children,
    itemsPerPage = 3,
    className = "",
    showArrows = true,
    showDots = true,
    autoPlay = false,
    autoPlayInterval = 5000
}) => {
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(children.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = children.slice(startIndex, endIndex);

    const goToPage = useCallback((page: number) => {
        setCurrentPage(Math.max(0, Math.min(page, totalPages - 1)));
    }, [totalPages]);

    const nextPage = useCallback(() => {
        goToPage(currentPage + 1);
    }, [currentPage, goToPage]);

    const prevPage = useCallback(() => {
        goToPage(currentPage - 1);
    }, [currentPage, goToPage]);

    // Auto-play functionality
    useMemo(() => {
        if (!autoPlay) return;

        const interval = setInterval(() => {
            if (currentPage < totalPages - 1) {
                nextPage();
            } else {
                goToPage(0);
            }
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [autoPlay, autoPlayInterval, currentPage, totalPages, nextPage, goToPage]);

    if (children.length <= itemsPerPage) {
        return (
            <div className={`flex flex-wrap gap-6 justify-center ${className}`}>
                {children}
            </div>
        );
    }

    return (
        <div className={`relative ${className}`}>
            {/* Carrusel Container */}
            <div className="relative overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage}
                        className="flex gap-6 justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        {currentItems}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            {showArrows && totalPages > 1 && (
                <>
                    <motion.button
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-[rgba(110,7,243,0.2)] to-[rgba(153,69,255,0.1)] backdrop-blur-[20px] rounded-full border border-[rgba(255,255,255,0.2)] text-white hover:border-[#6e07f3] hover:bg-gradient-to-r hover:from-[rgba(110,7,243,0.3)] hover:to-[rgba(153,69,255,0.2)] transition-all duration-300 flex items-center justify-center z-10"
                        onClick={prevPage}
                        disabled={currentPage === 0}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <FaChevronLeft className="text-lg" />
                    </motion.button>

                    <motion.button
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-[rgba(110,7,243,0.2)] to-[rgba(153,69,255,0.1)] backdrop-blur-[20px] rounded-full border border-[rgba(255,255,255,0.2)] text-white hover:border-[#6e07f3] hover:bg-gradient-to-r hover:from-[rgba(110,7,243,0.3)] hover:to-[rgba(153,69,255,0.2)] transition-all duration-300 flex items-center justify-center z-10"
                        onClick={nextPage}
                        disabled={currentPage === totalPages - 1}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <FaChevronRight className="text-lg" />
                    </motion.button>
                </>
            )}

            {/* Dots Navigation */}
            {showDots && totalPages > 1 && (
                <div className="flex justify-center gap-3 mt-8">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <motion.button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentPage
                                    ? 'bg-gradient-to-r from-[#6e07f3] to-[#9945ff] scale-125'
                                    : 'bg-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.5)]'
                                }`}
                            onClick={() => goToPage(index)}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        />
                    ))}
                </div>
            )}

            {/* Page Indicator */}
            <div className="text-center mt-4 text-[#b366ff] text-sm font-medium">
                {currentPage + 1} de {totalPages}
            </div>
        </div>
    );
}; 
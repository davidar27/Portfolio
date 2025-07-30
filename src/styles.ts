import { Styles } from '@/types';

export const styles: Styles = {
    // Sección principal con gradiente de fondo glassmorfismo
    mySection: "min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#16213e] flex flex-col items-center justify-center gap-8 p-8 xl:p-32 md:p-16 md:pt-20 md:pb-20",
    
    // Título principal con gradiente de texto
    myTitle: "text-5xl xl:text-6xl font-bold text-center bg-gradient-to-r from-[#6e07f3] to-[#9945ff] bg-clip-text text-transparent",
    
    // Contenedor con efecto glassmorfismo
    myContainer: "min-h-90 w-auto max-w-[90vw] flex flex-wrap gap-6 justify-center text-center bg-gradient-to-br from-[rgba(110,7,243,0.15)] to-[rgba(153,69,255,0.05)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.18)] p-6 rounded-2xl shadow-2xl",
    
    // Columnas con efecto glassmorfismo
    myColumn: "bg-gradient-to-br from-[rgba(110,7,243,0.1)] to-[rgba(153,69,255,0.05)] backdrop-blur-[25px] border border-[rgba(255,255,255,0.15)] p-6 rounded-xl shadow-xl flex flex-col items-center justify-center w-full max-w-xs min-w-60 min-h-80 gap-4 hover:border-[rgba(255,255,255,0.25)] transition-all duration-300",
    
    // Iconos con color base
    myIcon: "text-8xl text-[#6e07f3]",
    
    // Títulos de columnas
    myTitleColumn: "text-3xl font-bold text-white break-words",
    
    // Tecnologías
    mytechnologies: "list-disc text-2xl font-light text-[#e0e0e0] text-left break-words",
    mytechnologiesClassName: "list-disc text-2xl font-light text-[#e0e0e0] text-left break-words",
    
    // Imagen de perfil con borde glassmorfismo
    picture: "xl:w-64 xl:h-64 lg:w-56 lg:h-56 md:w-44 md:h-44 sm:w-36 sm:h-36 rounded-full drop-shadow-2xl border-4 border-[rgba(110,7,243,0.3)] backdrop-blur-[10px]",
    
    // Descripción
    myDescription: "text-center text-[#e0e0e0] text-lg max-w-4xl",
    
    // Botones de redes sociales
    buttonRedSocial: "group bg-gradient-to-br from-[rgba(110,7,243,0.2)] to-[rgba(153,69,255,0.1)] backdrop-blur-[15px] rounded-full border-2 border-[rgba(255,255,255,0.2)] h-12 w-12 flex justify-center items-center hover:border-[#6e07f3] hover:bg-gradient-to-br hover:from-[rgba(110,7,243,0.3)] hover:to-[rgba(153,69,255,0.2)] transition-all duration-300",
    
    // Iconos de redes sociales
    iconRedSocial: "text-2xl text-white group-hover:text-[#b366ff] transition-colors duration-300",
};

export default styles; 
# Portfolio - Landing Page Glassmorfismo

Un portfolio personal moderno y atractivo desarrollado como una landing page de una sola página con navegación suave entre secciones, construido con TypeScript y efectos glassmorfismo para mayor seguridad de tipos y una experiencia visual impactante. **Implementado siguiendo los principios SOLID y optimizado para máximo rendimiento.**

## 🚀 Características

- **Landing Page de Una Sola Página**: Diseño moderno con todas las secciones en una sola página
- **Efectos Glassmorfismo**: Diseño con efectos de vidrio y transparencias modernas
- **TypeScript**: Tipado estático para mayor seguridad y mejor autocompletado
- **Navegación Suave**: Scroll suave entre secciones con navegación fija
- **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **Animaciones**: Animaciones fluidas con Framer Motion
- **Paleta de Colores**: Basada en #6e07f3 con efectos glassmorfismo
- **Principios SOLID**: Arquitectura limpia y mantenible
- **Optimización de Rendimiento**: Componentes memoizados y lazy loading
- **Carrusel Inteligente**: Navegación automática cuando hay más de 3 elementos
- **Proyectos con URLs**: Imágenes de proyectos cargadas desde URLs externas
- **Enlaces Directos**: Acceso directo a demos en vivo y repositorios
- **Secciones Incluidas**:
  - Hero Section con información personal
  - Habilidades Técnicas
  - Habilidades Sociales
  - Proyectos Destacados
  - Estudios
  - Contacto

## 🛠️ Tecnologías Utilizadas

- **React 18** con TypeScript
- **Vite** - Build tool
- **Tailwind CSS** - Framework de estilos
- **Framer Motion** - Animaciones
- **React Icons** - Iconografía
- **TypeScript** - Tipado estático
- **Glassmorfismo** - Efectos de vidrio modernos

## 🏗️ Arquitectura SOLID

### **S - Single Responsibility Principle (SRP)**
- **Hooks personalizados**: `useScrollNavigation`, `useScrollHeader`
- **Servicios**: `PortfolioDataService` para manejo de datos
- **Componentes especializados**: Cada componente tiene una responsabilidad única
- **Carrusel reutilizable**: Componente independiente para navegación

### **O - Open/Closed Principle (OCP)**
- **Interfaces extensibles**: Tipos base que permiten extensión
- **Componentes configurables**: Props que permiten personalización sin modificar código
- **Servicios modulares**: Fácil agregar nuevos tipos de datos
- **Carrusel configurable**: Múltiples opciones de personalización

### **L - Liskov Substitution Principle (LSP)**
- **Interfaces coherentes**: `BaseSkill` extendida por `TechnicalSkill` y `SocialSkill`
- **Tipos compatibles**: Todas las implementaciones son intercambiables
- **Props tipadas**: Interfaces que garantizan compatibilidad

### **I - Interface Segregation Principle (ISP)**
- **Interfaces específicas**: `NavigationProps`, `SectionRefs`
- **Props opcionales**: Solo las propiedades necesarias en cada componente
- **Servicios especializados**: Métodos específicos para cada tipo de dato

### **D - Dependency Inversion Principle (DIP)**
- **Inyección de dependencias**: Hooks y servicios inyectados
- **Componentes reutilizables**: `GlassCard`, `Section`, `Carousel`
- **Abstracciones**: Interfaces que definen contratos claros

## ⚡ Optimizaciones de Rendimiento

### **React.memo**
- Componentes memoizados para evitar re-renders innecesarios
- `HeroSection`, `TechnicalSkillsSection`, `SocialSkillsSection`
- `ProjectsSection`, `StudiesSection`, `ContactSection`
- `Carousel` y componentes de tarjetas

### **useMemo y useCallback**
- `useMemo` para referencias de secciones
- `useCallback` para funciones de navegación
- Optimización de dependencias en useEffect
- Cálculos de carrusel optimizados

### **Lazy Loading**
- Componentes cargados bajo demanda
- Animaciones optimizadas con `viewport={{ once: true }}`
- Event listeners pasivos para scroll
- Carrusel con carga progresiva

### **Optimizaciones CSS**
- Clases utilitarias reutilizables
- Efectos glassmorfismo optimizados
- Transiciones CSS en lugar de JavaScript cuando es posible
- Animaciones de carrusel optimizadas

## 🎨 Paleta de Colores Glassmorfismo

### Colores Principales
- **Color Base**: `#6e07f3` (Violeta vibrante)
- **Complementarios**: 
  - `#9945ff` (Violeta más claro)
  - `#4c0099` (Violeta oscuro)
  - `#b366ff` (Violeta pastel)

### Colores de Fondo
- `#0a0a0f` (Negro azulado)
- `#1a1a2e` (Azul oscuro)
- `#16213e` (Azul medio)

### Colores Neutros
- `#ffffff` (Blanco puro)
- `#e0e0e0` (Gris claro)
- `#404040` (Gris medio)

### Efectos Glassmorfismo
- **Fondo**: `rgba(110, 7, 243, 0.1)` a `rgba(110, 7, 243, 0.2)`
- **Bordes**: `rgba(255, 255, 255, 0.18)`
- **Backdrop blur**: `blur(20px)` a `blur(40px)`

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── layouts/
│   │   ├── Header/           # Navegación con glassmorfismo
│   │   └── Footer/           # Pie de página glassmorfismo
│   ├── pages/
│   │   ├── HeroSection/      # Sección principal
│   │   ├── TechnicalSkills/  # Habilidades técnicas
│   │   ├── SocialSkills/     # Habilidades sociales
│   │   ├── ProjectsSection/  # Proyectos destacados
│   │   ├── StudiesSection/   # Estudios
│   │   └── ContactSection/   # Contacto
│   ├── sections/
│   │   └── Section.tsx       # Componente de sección reutilizable
│   └── ui/                   # Componentes reutilizables
│       ├── Carousel/         # Carrusel inteligente
│       ├── GlassCard/        # Tarjeta con efecto glassmorfismo
│       ├── ProjectCard/      # Tarjeta de proyecto
│       ├── ButtonIcon/       # Botón con icono
│       ├── Column/           # Columna de contenido
│       ├── MainTitle/        # Título principal
│       └── Picture/          # Componente de imagen
├── hooks/                    # Hooks personalizados
│   ├── useScrollNavigation.ts
│   └── useScrollHeader.ts
├── services/                 # Servicios de datos
│   └── portfolioData.ts
├── assets/
│   └── images/               # Imágenes del proyecto
├── types/                    # Definiciones de tipos TypeScript
├── styles.ts                 # Estilos glassmorfismo
├── main.tsx                  # Punto de entrada
└── App.tsx                   # Componente principal
```

## 🚀 Instalación y Uso

1. **Clonar el repositorio**:
   ```bash
   git clone <url-del-repositorio>
   cd Portfolio
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**:
   ```bash
   npm run dev
   ```

4. **Verificar tipos TypeScript**:
   ```bash
   npm run type-check
   ```

5. **Construir para producción**:
   ```bash
   npm run build
   ```

## 🎨 Personalización

### Cambiar Información Personal
Edita el archivo `src/services/portfolioData.ts` para modificar:
- Nombre y descripción personal
- Habilidades técnicas y sociales
- Proyectos destacados (con URLs de imágenes)
- Estudios
- Enlaces de redes sociales

### Agregar Nuevos Proyectos
Para agregar un nuevo proyecto, edita `src/services/portfolioData.ts`:

```typescript
{
  icon: "https://tu-url-de-imagen.com/imagen.png",
  title: "Nombre del Proyecto",
  description: "Descripción detallada del proyecto",
  technologies: ["React", "Node.js", "MongoDB"],
  projectUrl: "https://demo-del-proyecto.com", // Opcional
  githubUrl: "https://github.com/usuario/repositorio" // Opcional
}
```

### Configurar el Carrusel
El carrusel se activa automáticamente cuando hay más de 3 elementos. Puedes personalizarlo:

```typescript
<Carousel
  itemsPerPage={3}           // Elementos por página
  showArrows={true}          // Mostrar flechas de navegación
  showDots={true}            // Mostrar indicadores de puntos
  autoPlay={false}           // Reproducción automática
  autoPlayInterval={5000}    // Intervalo de auto-reproducción
  className="max-w-7xl mx-auto"
>
  {elementos}
</Carousel>
```

### Modificar Estilos Glassmorfismo
- Los estilos globales están en `src/styles.ts`
- Los efectos glassmorfismo se configuran en `src/index.css`
- Las animaciones se configuran con Framer Motion

### Agregar Nuevas Secciones
1. Crea una nueva sección en `LandingPage.tsx`
2. Agrega la referencia correspondiente en `useScrollNavigation`
3. Actualiza la navegación en `Header.tsx`
4. Define los tipos necesarios en `src/types/index.ts`

## 🔗 Implementación del Hook useScrollNavigation

### ¿Qué hace el hook?

El hook `useScrollNavigation` es responsable de:
- **Gestionar referencias**: Crear y mantener referencias a todas las secciones
- **Navegación suave**: Proporcionar función para scroll suave entre secciones
- **Optimización**: Usar `useMemo` y `useCallback` para mejor rendimiento

### Estructura del Hook

```typescript
// src/hooks/useScrollNavigation.ts
import { useRef, useCallback, useMemo } from 'react';

interface SectionRefs {
    home: React.RefObject<HTMLElement | null>;
    technical: React.RefObject<HTMLElement | null>;
    social: React.RefObject<HTMLElement | null>;
    projects: React.RefObject<HTMLElement | null>;
    studies: React.RefObject<HTMLElement | null>;
    contact: React.RefObject<HTMLElement | null>;
}

export const useScrollNavigation = () => {
    // 1. Crear referencias para cada sección
    const homeRef = useRef<HTMLElement>(null);
    const technicalRef = useRef<HTMLElement>(null);
    const socialRef = useRef<HTMLElement>(null);
    const projectsRef = useRef<HTMLElement>(null);
    const studiesRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);

    // 2. Agrupar referencias en un objeto memoizado
    const sectionRefs: SectionRefs = useMemo(() => ({
        home: homeRef,
        technical: technicalRef,
        social: socialRef,
        projects: projectsRef,
        studies: studiesRef,
        contact: contactRef
    }), []);

    // 3. Función de navegación optimizada
    const scrollToSection = useCallback((sectionId: string): void => {
        const ref = sectionRefs[sectionId as keyof SectionRefs];
        if (ref?.current) {
            ref.current.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, [sectionRefs]);

    return {
        sectionRefs,
        scrollToSection
    };
};
```

### Cómo usar el Hook

#### 1. En el componente principal (LandingPage)

```typescript
import { useScrollNavigation } from '@/hooks/useScrollNavigation';

export const LandingPage: React.FC = memo(() => {
    const { sectionRefs, scrollToSection } = useScrollNavigation();

    return (
        <div className="landing-page">
            {/* Pasar la función de navegación al Header */}
            <Header onNavigate={scrollToSection} />

            {/* Asignar referencias a cada sección */}
            <Section
                id="home"
                ref={sectionRefs.home}
                title=""
            >
                <HeroSection onNavigate={scrollToSection} />
            </Section>

            <Section
                id="technical"
                ref={sectionRefs.technical}
                title="Habilidades Técnicas"
            >
                <TechnicalSkillsSection />
            </Section>

            {/* ... más secciones */}
        </div>
    );
});
```

#### 2. En el Header (Navegación)

```typescript
interface NavigationProps {
    onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<NavigationProps> = ({ onNavigate }) => {
    const handleNavClick = (sectionId: string): void => {
        onNavigate(sectionId);
    };

    return (
        <nav>
            <button onClick={() => handleNavClick('home')}>Inicio</button>
            <button onClick={() => handleNavClick('technical')}>Habilidades</button>
            <button onClick={() => handleNavClick('projects')}>Proyectos</button>
            {/* ... más botones */}
        </nav>
    );
};
```

#### 3. En componentes internos (HeroSection)

```typescript
interface HeroSectionProps {
    onNavigate?: (sectionId: string) => void;
}

const HeroSection = memo(({ onNavigate }: HeroSectionProps) => {
    const handleViewSkills = () => {
        if (onNavigate) {
            onNavigate('technical');
        }
    };

    const handleViewProjects = () => {
        if (onNavigate) {
            onNavigate('projects');
        }
    };

    return (
        <div>
            <button onClick={handleViewSkills}>Ver Habilidades</button>
            <button onClick={handleViewProjects}>Ver Proyectos</button>
        </div>
    );
});
```

### Ventajas del Hook

#### **1. Reutilización**
- Un solo hook para toda la navegación
- Fácil de usar en cualquier componente
- Consistencia en toda la aplicación

#### **2. Optimización**
- `useMemo` para referencias estables
- `useCallback` para función de navegación
- Evita re-renders innecesarios

#### **3. TypeScript**
- Tipado completo para referencias
- Autocompletado en el IDE
- Detección de errores en tiempo de compilación

#### **4. Flexibilidad**
- Fácil agregar nuevas secciones
- Configuración de scroll personalizable
- Compatible con diferentes navegadores

### Agregar Nueva Sección

Para agregar una nueva sección:

1. **Actualizar la interfaz**:
```typescript
interface SectionRefs {
    // ... secciones existentes
    nuevaSeccion: React.RefObject<HTMLElement | null>;
}
```

2. **Crear la referencia**:
```typescript
const nuevaSeccionRef = useRef<HTMLElement>(null);
```

3. **Agregar al objeto de referencias**:
```typescript
const sectionRefs: SectionRefs = useMemo(() => ({
    // ... referencias existentes
    nuevaSeccion: nuevaSeccionRef
}), []);
```

4. **Usar en el componente**:
```typescript
<Section
    id="nuevaSeccion"
    ref={sectionRefs.nuevaSeccion}
    title="Nueva Sección"
>
    <NuevaSeccionComponent />
</Section>
```

5. **Agregar a la navegación**:
```typescript
<button onClick={() => onNavigate('nuevaSeccion')}>
    Nueva Sección
</button>
```

## 📱 Responsive Design

La landing page está optimizada para:
- **Móviles**: Navegación hamburguesa, diseño compacto, carrusel adaptativo
- **Tablets**: Layout adaptativo, carrusel con 2 elementos por página
- **Desktop**: Navegación completa, máximo aprovechamiento del espacio, carrusel con 3 elementos

## 🎯 Características de UX

- **Navegación Fija**: Barra de navegación siempre visible con glassmorfismo
- **Scroll Suave**: Transiciones fluidas entre secciones
- **Animaciones de Entrada**: Elementos que aparecen con animaciones
- **Carrusel Inteligente**: Navegación automática cuando es necesario
- **Call-to-Actions**: Botones con efectos glassmorfismo
- **Enlaces de Proyectos**: Acceso directo a demos y repositorios
- **Información de Contacto**: Enlaces a redes sociales y contacto directo
- **Efectos Visuales**: Gradientes, sombras y transparencias

## 🔧 TypeScript

El proyecto utiliza TypeScript para:
- **Seguridad de Tipos**: Detección temprana de errores
- **Mejor Autocompletado**: IntelliSense mejorado en el IDE
- **Documentación Viva**: Los tipos sirven como documentación
- **Refactoring Seguro**: Cambios de código más seguros

### Estructura de Tipos
- `src/types/index.ts`: Definiciones de tipos globales
- Interfaces para componentes, datos y props
- Tipos para habilidades, proyectos y estudios

## 🎨 Efectos Glassmorfismo

### Características Implementadas
- **Backdrop Blur**: Efectos de desenfoque de fondo
- **Transparencias**: Elementos semi-transparentes
- **Bordes Sutiles**: Bordes con opacidad variable
- **Gradientes**: Transiciones de color suaves
- **Sombras**: Efectos de profundidad
- **Hover Effects**: Interacciones mejoradas

### Clases CSS Utilitarias
- `.glass-effect`: Efecto básico de vidrio
- `.glass-card`: Tarjeta con efecto glassmorfismo
- `.hover-glow`: Efecto de brillo en hover

## 🎠 Carrusel Inteligente

### Características del Carrusel
- **Activación Automática**: Se activa cuando hay más de 3 elementos
- **Navegación Múltiple**: Flechas, puntos y indicador de página
- **Animaciones Suaves**: Transiciones fluidas entre páginas
- **Responsive**: Se adapta a diferentes tamaños de pantalla
- **Configurable**: Múltiples opciones de personalización
- **Auto-play Opcional**: Reproducción automática configurable

### Funcionalidades
- **Navegación por Flechas**: Botones con efectos glassmorfismo
- **Indicadores de Puntos**: Navegación directa a cualquier página
- **Contador de Páginas**: Muestra la página actual y total
- **Animaciones de Entrada**: Efectos de aparición para cada página
- **Optimización de Rendimiento**: Solo renderiza elementos visibles

## 📊 Métricas de Rendimiento

### Optimizaciones Implementadas
- **Bundle Size**: Componentes tree-shakeables
- **First Contentful Paint**: Carga optimizada
- **Largest Contentful Paint**: Imágenes optimizadas
- **Cumulative Layout Shift**: Layout estable
- **First Input Delay**: Interacciones responsivas

### Herramientas de Análisis
- **Lighthouse**: Auditoría de rendimiento
- **React DevTools**: Profiling de componentes
- **TypeScript**: Verificación de tipos en tiempo de compilación

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👨‍💻 Autor

**Jhonatan David Arcos Dominguez**
- GitHub: [@davidar27](https://github.com/davidar27)
- LinkedIn: [Jhonatan Arcos](https://www.linkedin.com/in/jhonatanarcos/)
- Email: jhonatanarcos10@gmail.com

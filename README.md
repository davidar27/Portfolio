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
- **Secciones Incluidas**:
  - Hero Section con información personal
  - Habilidades Técnicas
  - Habilidades Sociales
  - Experiencia Profesional
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

### **O - Open/Closed Principle (OCP)**
- **Interfaces extensibles**: Tipos base que permiten extensión
- **Componentes configurables**: Props que permiten personalización sin modificar código
- **Servicios modulares**: Fácil agregar nuevos tipos de datos

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
- **Componentes reutilizables**: `GlassCard`, `Section`
- **Abstracciones**: Interfaces que definen contratos claros

## ⚡ Optimizaciones de Rendimiento

### **React.memo**
- Componentes memoizados para evitar re-renders innecesarios
- `HeroSection`, `TechnicalSkillsSection`, `SocialSkillsSection`
- `ExperienceSection`, `StudiesSection`, `ContactSection`

### **useMemo y useCallback**
- `useMemo` para referencias de secciones
- `useCallback` para funciones de navegación
- Optimización de dependencias en useEffect

### **Lazy Loading**
- Componentes cargados bajo demanda
- Animaciones optimizadas con `viewport={{ once: true }}`
- Event listeners pasivos para scroll

### **Optimizaciones CSS**
- Clases utilitarias reutilizables
- Efectos glassmorfismo optimizados
- Transiciones CSS en lugar de JavaScript cuando es posible

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
│   │   └── LandingPage/      # Componente principal
│   ├── sections/
│   │   └── Section.tsx       # Componente de sección reutilizable
│   └── ui/                   # Componentes reutilizables
│       ├── GlassCard/        # Tarjeta con efecto glassmorfismo
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
- Experiencia laboral
- Estudios
- Enlaces de redes sociales

### Modificar Estilos Glassmorfismo
- Los estilos globales están en `src/styles.ts`
- Los efectos glassmorfismo se configuran en `src/index.css`
- Las animaciones se configuran con Framer Motion

### Agregar Nuevas Secciones
1. Crea una nueva sección en `LandingPage.tsx`
2. Agrega la referencia correspondiente en `useScrollNavigation`
3. Actualiza la navegación en `Header.tsx`
4. Define los tipos necesarios en `src/types/index.ts`

## 📱 Responsive Design

La landing page está optimizada para:
- **Móviles**: Navegación hamburguesa, diseño compacto
- **Tablets**: Layout adaptativo
- **Desktop**: Navegación completa, máximo aprovechamiento del espacio

## 🎯 Características de UX

- **Navegación Fija**: Barra de navegación siempre visible con glassmorfismo
- **Scroll Suave**: Transiciones fluidas entre secciones
- **Animaciones de Entrada**: Elementos que aparecen con animaciones
- **Call-to-Actions**: Botones con efectos glassmorfismo
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
- Tipos para habilidades, experiencia y estudios

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

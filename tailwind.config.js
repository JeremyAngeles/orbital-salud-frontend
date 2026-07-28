/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- Paleta Original Orbital ---
        'os-dark': '#2E4B34',       // Verde oscuro principal
        'os-medium': '#6B7C5A',     // Verde olivo
        'os-light': '#A3B18A',      // Verde claro / salvia
        'os-beige': '#F2EFE6',      // Blanco hueso / crema original
        'os-taupe': '#D9C8B1',      // Arena / beige
        
        // --- Nuevos Colores de la Maqueta ---
        'os-plomo': '#F1F2F3',        // Fondo plomo claro (ej: para el panel o secciones)
        'os-yellow-esp': '#EFE8D8',   // El "amarillo" crema para la sección especialidades
        'os-accent': '#256B3C',       // Verde acento más vibrante (usado en botones principales)
        
        // --- Tonos para Textos (Tipografía) ---
        'os-ink': '#17191A',          // Negro suave para el texto principal
        'os-ink-soft': '#5B6165',     // Plomo oscuro para párrafos y textos secundarios
        'os-gray-taupe': '#8A9096',   // Plomo medio para etiquetas o cejas (eyebrows)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      }
    },
  },
  plugins: [],
}
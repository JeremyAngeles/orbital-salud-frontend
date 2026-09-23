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
        'os-dark': '#2E4B34',
        'os-medium': '#6B7C5A',
        'os-light': '#A3B18A',
        'os-beige': '#F2EFE6',
        'os-taupe': '#D9C8B1',
        
        // --- Nuevos Colores de la Maqueta ---
        'os-plomo': '#F1F2F3',
        'os-yellow-esp': '#EFE8D8',
        'os-accent': '#256B3C',
        
        // --- Tonos para Textos (Tipografía) ---
        'os-ink': '#17191A',
        'os-ink-soft': '#5B6165',
        'os-gray-taupe': '#8A9096',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
        raleway: ['Raleway', 'sans-serif'], // <-- AGREGAS ESTA LÍNEA
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'os-dark': '#2E4B34',       
        'os-medium': '#6B7C5A',     
        'os-light': '#A3B18A',      
        'os-beige': '#F2EFE6',      
        'os-taupe': '#D9C8B1',      
        'os-ink': '#1c2a1e',        // Color extra para el texto de lectura
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      }
    },
  },
  plugins: [],
}
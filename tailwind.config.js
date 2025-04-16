/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}", // Incluye todos los archivos relevantes
    "./public/**/*.html", // Si tienes archivos HTML en public/
  ],
  theme: {
    extend: {colors: {
      'primary-color': 'var(--primary-color)',
    },},
    fontFamily: {
      lindsey: ['"lindsey-signature"', 'sans-serif'],
      alverata: ['"alverata"', 'sans-serif'],
      bebas: ['"bebas-neue"', 'sans-serif'],
    },
  },
  plugins: [],
};

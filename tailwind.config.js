/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}", // Incluye todos los archivos relevantes
    "./public/**/*.html", // Si tienes archivos HTML en public/
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1600px',
    },
    extend: {colors: {
      'primary-color': 'var(--primary-color)',
    },},
    fontFamily: {
      lindsey: ['"lindsey-signature"', 'sans-serif'],
      alverata: ['"alverata"', 'sans-serif'],
      bebas: ['"bebas"', 'sans-serif'],
      bebasBold: ['"bebas-bold"', 'sans-serif'],
      lato: ['"lato"', 'sans-serif'],
      latoBold: ['"lato-bold"', 'sans-serif'],
    },
  },
  plugins: [],
};

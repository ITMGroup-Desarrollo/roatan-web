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
  },
  plugins: [],
};

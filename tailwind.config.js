/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",        // Incluye tu archivo HTML principal
    "./src/**/*.{js,jsx}", // Busca en todos los archivos .js y .jsx dentro de la carpeta src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


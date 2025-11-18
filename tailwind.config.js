/**** Tailwind Config ****/
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#6366f1',
          foreground: '#e5e7eb'
        }
      },
      boxShadow: {
        'soft': '0 1px 2px 0 rgb(0 0 0 / 0.1), 0 2px 8px rgb(0 0 0 / 0.2)'
      }
    }
  },
  plugins: []
};

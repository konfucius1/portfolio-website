/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'primary-blue': '#2040CA',
      secondary: '#4704AF',
      accent: '#FF5E63',
      dark: '#0D0C12',
      'off-white': '#FFFCF5',
    },
  },
  plugins: [require('daisyui')],
};

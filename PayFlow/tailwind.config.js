/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js.jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fefdff',
        secondary: '#f6f6f6',
        tertiary: '#78797a',
        quaternary: '#6b43be',
        quinary: '#141414',
        // black: '#303841',
        // white: '#F3F3F3',
      },
    },
  },
  plugins: [],
};

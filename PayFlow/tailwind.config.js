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
        primary: '#F6F5F5',
        secondary: '#D3E0EA',
        tertiary: '#1687A7',
        quaternary: '#276678',
      },
    },
  },
  plugins: [],
};

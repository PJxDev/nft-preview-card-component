/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      softBlue: '#8bacda',
      cyan: '#00fff7',
      veryDarkBlueMain: '#0d192b',
      veryDarkBlueCard: '#14253d',
      veryDarkBlueLine: '#2f415b',
      white: '#fff',
    },
    
    fontFamily: {
      body: ['"Outfit", sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};

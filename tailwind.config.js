/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif']
      },
      colors:{
        main: "#00ADB5",
        second: "#393E46",
        body: "#EEEEEE"
      }
    },
  },
  plugins: [],
}
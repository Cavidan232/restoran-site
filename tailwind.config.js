/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "custom-dark": "#000000",
      },
      container: {
        center: true,
        padding: '2rem',
      },
    },
  },
  plugins: [],
}
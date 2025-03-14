/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF4D6D",
        secondary: "#FF758F",
        accent: "#FFB3C1",
        background: "#FFF0F3"
      }
    },
  },
  plugins: [],
}

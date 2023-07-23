/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-green": "#4d773b",
        "light-green": "#f0faeb",
        beige: "#e8d0a2",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};

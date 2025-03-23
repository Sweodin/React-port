// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sonic-blue": "#00a2e8",
        accent: "#ffd700",
        softergold: "#f0e68c",
        darkgray: "#333333",
        text: "#e0e0e0",
        "text-highlight": "#ffffff",
        secondary: "#0261d1",
      },
      backgroundImage: {
        "gradient-1": "linear-gradient(to right, #00a2e8, #007acc)",
        "gradient-2": "linear-gradient(to right, #007acc, #005c99)",
      },
    },
  },
  plugins: [],
};

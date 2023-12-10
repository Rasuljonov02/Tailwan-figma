/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,ts}", "./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        spring: "#efed40",
        gray: "rgba(0, 0, 0, 0.40)",
        black: "#888888"
      }
    }
  },
  plugins: []
};

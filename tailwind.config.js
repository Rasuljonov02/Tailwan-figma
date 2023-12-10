/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,ts}", "./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        user: "#1C1C1C",
        qora:#000000;
        toq: "rgba(0, 0, 0, 0.40)",
        och: "rgba(0, 0, 0, 0.20)"
      }
    }
  },
  plugins: []
};


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        vim: "var(--color-vim)",
        grey: "var(--color-grey)",
        pink: "var(--color-pink)",
        cream: "var(--color-cream)",
        sky: "var(--color-sky)",
        purple: "var(--color-purple)",
      },
    },
  },
  plugins: [require("daisyui")],
};

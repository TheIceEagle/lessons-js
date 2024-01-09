import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Mono", "sans-serif"],
      },
      colors: {
        active: {
          DEFAULT: "hsl(var(--primary-color) / <alpha-value>)",
          hover: "hsl(var(--primary-hover-color) / <alpha-value>)",
        },
        bg: {
          DEFAULT: "hsl(var(--bg-primary-color) / <alpha-value>)",
          secondary: "hsl(var(--bg-secondary-color) / <alpha-value>)",
        },
        txt: {
          main: "hsl(var(--txt-main-color) / <alpha-value>)",
          DEFAULT: "hsl(var(--txt-primary-color) / <alpha-value>)",
          h1: "hsl(var(--txt-h1-color) / <alpha-value>)",
          date: "hsl(var(--txt-date-color) / <alpha-value>)",
          hover: "hsl(var(--txt-primary-hover-color) / <alpha-value>)",
          error: "hsl(var(--txt-error-color) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

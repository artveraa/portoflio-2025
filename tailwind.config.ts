import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "var(--dark)",
        main: "var(--main)",
      },
      fontFamily: {
        anton: "var(--font-anton)",
        instrument: "var(--font-instrument)",
        inter: "var(--font-inter)",
      },
      keyframes: {
        handShake: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
      },
      animation: {
        handShake: "handShake 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;

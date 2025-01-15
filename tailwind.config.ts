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
    },
  },
  plugins: [],
} satisfies Config;

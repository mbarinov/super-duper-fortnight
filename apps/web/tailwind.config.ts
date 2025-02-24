import type { Config } from "tailwindcss";

const config: Config = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans"],
        lato: ["var(--font-lato)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans"],
        lato: ["var(--font-lato)", "sans-serif"],
      },
      colors: {
        accent: {
          DEFAULT: "#E6EFF5",
        },
      },
    },
  },
  plugins: [],
};

export default config;

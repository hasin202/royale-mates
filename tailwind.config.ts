import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        "sm-cards-grid-cols": "repeat(4, 29px)",
        "md-cards-grid-cols": "repeat(4, 55px)",
        "2xl-cards-grid-cols": "repeat(4, 65px)",
      },
      fontFamily: {
        supercell: ["supercell"],
      },
      fontSize: {
        "2xs": "0.6rem",
      },
    },
  },
  plugins: [],
};
export default config;

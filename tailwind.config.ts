import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    //Properties based on the design in the figma page
    extend: {
      colors: {
        "bg-primary": "#585660",
        "bg-neutral": "#404040",
        "surface-secondary": "#EEEEEE",
        "stroke-primary": "#3B3B3B",
        "stroke-secondary": "#8F8F8F",
        "stroke-tertiary": "#EFEDF3",
        "text-primary": "#3B3B3B",
        "text-secondary": "#737373",
      },
      borderWidth: {
        "card": "0.5px",
        "cta": "1px",
      }
    },
  },
  plugins: [],
};

export default config;
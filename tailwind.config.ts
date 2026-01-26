import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0072E9",
        secondary: "#012652",
        accent: "#26363E",
        text: "#12191D",
        background: "#F4F4F4",
        "gray-blue": "#7C98A9",
      },
    },
  },
  plugins: [],
};

export default config;

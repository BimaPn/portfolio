import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 60px rgba(255,255, 255, 0.35)",
          "0 0px 105px rgba(255, 255,255, 0.2)"
        ]
      },
      colors : {
        primary : '#6B8AFD',
        dark : '#020413',
        semiDark : '#03081D',
        netral : '#081F47',
        semiLight : '#1282A2',
        light : '#6FFFE9',
      },
    },
  },
  plugins: [],
};
export default config;

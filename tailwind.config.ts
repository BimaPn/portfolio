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
        primary : '#5772D5',
        dark : '#020413',
        semiDark : '#03081D',
        netral : '#081F47',
        semiLight : '#1282A2',
        light : '#6FFFE9',
      },
    },
    screens : {
      ssm : "352px",
      xs : "480px",
      ss : "556px",
      ssi: "612px",
      sm : "768px",
      md : "1024px",
      lg : "1280px",
      xl : "1440px",
      xxl : "1700px"
    }
  },
  plugins: [],
};
export default config;

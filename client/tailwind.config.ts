import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-peach": "#FDA4AF",
        "secondary-blue" : "#CCE5E2",
        "brand-blue":"#A5CABB",
        "brand-white":"#FCFCFC",
        "brand-grey":"#DFE3E4",
        "brand-black": "#FFF",
        "secondary-grey": "#DFE3E466",
        "input-grey": "#EAEAEA",
        "brand-green": "#C2EFDC",
        "brand-purple" :"#7C3AED",
        "secondary-black": "#302E38",
        "navbar-bg": "#f8fafc",
        "button-grey": "#6b7280",
        "brand-orange":"#ED7A41"



      },
    },
  },
  plugins: [],
};
export default config;

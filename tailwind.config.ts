import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: [
      {
                light: {
          // Primary - Material Light Green
          primary: "#8BC34A",
          "primary-focus": "#7CB342",
          "primary-content": "#FFFFFF",
        
          // Secondary - Mint Green
          secondary: "#9CCC65",
          "secondary-focus": "#8BC34A",
          "secondary-content": "#1A1A1A",
        
          // Accent - Soft Lime
          accent: "#AED581",
          "accent-focus": "#9CCC65",
          "accent-content": "#1A1A1A",
        
          // Neutral - Material Gray
          neutral: "#757575",
          "neutral-focus": "#616161",
          "neutral-content": "#FFFFFF",
        
          // Base - Clean Light
          "base-100": "#FAFAFA",
          "base-200": "#F5F5F5",
          "base-300": "#EEEEEE",
          "base-content": "#212121",
        
          // Status Colors
          info: "#64B5F6",
          success: "#81C784",
          warning: "#FFD54F",
          error: "#E57373",
        },
        
        dark: {
          // Primary - Deep Light Green
          primary: "#689F38",
          "primary-focus": "#558B2F",
          "primary-content": "#F1F8E9",
        
          // Secondary - Deep Mint
          secondary: "#7CB342",
          "secondary-focus": "#689F38",
          "secondary-content": "#F1F8E9",
        
          // Accent - Deep Lime
          accent: "#9CCC65",
          "accent-focus": "#8BC34A",
          "accent-content": "#1A1A1A",
        
          // Neutral - Material Dark Gray
          neutral: "#424242",
          "neutral-focus": "#303030",
          "neutral-content": "#FAFAFA",
        
          // Base - Material Dark
          "base-100": "#212121",
          "base-200": "#303030",
          "base-300": "#424242",
          "base-content": "#FAFAFA",
        
          // Status Colors
          info: "#42A5F5",
          success: "#66BB6A",
          warning: "#FFCA28",
          error: "#EF5350",
        },
      },
    ],
  },
};
export default config;

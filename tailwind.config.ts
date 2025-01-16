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
          primary: "#a4c3d2",
          "primary-focus": "#1C3425",
          "primary-content": "#ffffff",

          secondary: "#6b9080",
          "secondary-focus": "#D6CCB8",
          "secondary-content": "#1C3425",

          accent: "#67b99a",
          "accent-focus": "#D6CCB8",
          "accent-content": "#1C3425",

          neutral: "#3d4451",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",

          "base-100": "#f6fff8",
          "base-200": "#eaf4f4",
          "base-300": "#cce3de",

          "base-content": "#1f2937",

          info: "#2094f3", // Blue
          success: "#009485", // Green
          warning: "#ff9900", // Orange
          error: "#ff5724", // Red
        },
        dark: {
          // Primary - Deep Purple
          primary: "#9D5CFF", // Vibrant purple
          "primary-focus": "#B794F4", // Lighter purple for focus
          "primary-content": "#FFFFFF", // White text

          // Secondary - Sage Green
          secondary: "#4FD1C5", // Teal
          "secondary-focus": "#38B2AC", // Darker teal for focus
          "secondary-content": "#1A202C", // Dark text

          // Accent - Mint
          accent: "#68D391", // Fresh mint
          "accent-focus": "#48BB78", // Darker mint for focus
          "accent-content": "#1A202C", // Dark text

          // Neutral - Slate
          neutral: "#1A1A1A", // Dark slate
          "neutral-focus": "#262626", // Lighter slate for focus
          "neutral-content": "#FFFFFF", // White text

          // Base Colors
          "base-100": "#0A0A0A", // Almost black
          "base-200": "#1A1A1A", // Dark gray
          "base-300": "#262626", // Medium gray
          "base-content": "#FAFAFA", // Off-white text

          // Status Colors
          info: "#63B3ED", // Sky blue
          success: "#68D391", // Fresh green
          warning: "#F6AD55", // Soft orange
          error: "#FC8181", // Coral red
        },
      },
    ],
  },
};
export default config;

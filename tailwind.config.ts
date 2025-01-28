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
          // Primary - Forest Green
          primary: "#2F7A4D",
          "primary-focus": "#1E5434",
          "primary-content": "#FFFFFF",

          // Secondary - Sage
          secondary: "#86A789",
          "secondary-focus": "#6B8A6E",
          "secondary-content": "#FFFFFF",

          // Accent - Terra Cotta
          accent: "#C17C74",
          "accent-focus": "#A65D54",
          "accent-content": "#FFFFFF",

          // Neutral - Bark
          neutral: "#4A4238",
          "neutral-focus": "#332D26",
          "neutral-content": "#FFFFFF",

          // Base - Natural Light
          "base-100": "#FDFDF5",
          "base-200": "#F3F3E7",
          "base-300": "#E8E8D5",
          "base-content": "#2D2D1F",

          // Status Colors
          info: "#7CC2D4",
          success: "#78B088",
          warning: "#DEB841",
          error: "#DE6B48",
        },

        dark: {
          // Primary - Deep Forest
          primary: "#3B8C5C",
          "primary-focus": "#2A6443",
          "primary-content": "#E8F5ED",

          // Secondary - Deep Sage
          secondary: "#7C9A82",
          "secondary-focus": "#5F7B64",
          "secondary-content": "#F0F5F1",

          // Accent - Autumn
          accent: "#B86F68",
          "accent-focus": "#9A574F",
          "accent-content": "#FFF1F0",

          // Neutral - Dark Wood
          neutral: "#2C2822",
          "neutral-focus": "#1A1814",
          "neutral-content": "#F5F5F0",

          // Base - Night Forest
          "base-100": "#1C1C14",
          "base-200": "#24241B",
          "base-300": "#2E2E22",
          "base-content": "#F8F8F0",

          // Status Colors
          info: "#5B919E",
          success: "#5B8868",
          warning: "#B39235",
          error: "#B85539",
        },
      },
    ],
  },
};
export default config;

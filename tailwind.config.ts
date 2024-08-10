import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),

  ],
  daisyui: {
    themes: [
      {
        'light': {

          'primary': '#a4c3d2',
          'primary-focus': '#1C3425',
          'primary-content': '#ffffff',

          'secondary': '#6b9080',
          'secondary-focus': '#D6CCB8',
          'secondary-content': '#1C3425',

          'accent': '#67b99a',
          'accent-focus': '#D6CCB8',
          'accent-content': '#1C3425',

          'neutral': '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',

          'base-100': '#f6fff8',
          'base-200': '#eaf4f4',
          'base-300': '#cce3de',

          'base-content': '#1f2937',

          'info': '#2094f3',             // Blue
          'success': '#009485',          // Green
          'warning': '#ff9900',          // Orange
          'error': '#ff5724',            // Red

        },
        'dark': {
          'primary': '#bb86fc',             // Google Material Design Dark Purple
          'primary-focus': '#3700b3',       // Google Material Design Dark Purple (Focus)
          'primary-content': '#ffffff',     // White

          'secondary': '#03dac6',           // Google Material Design Teal
          'secondary-focus': '#018786',     // Google Material Design Teal (Focus)
          'secondary-content': '#000000',   // Black

          'accent': '#03dac6',              // Google Material Design Teal
          'accent-focus': '#018786',        // Google Material Design Teal (Focus)
          'accent-content': '#ffffff',      // White

          'neutral': '#121212',             // Google Material Design Dark Gray
          'neutral-focus': '#1e1e1e',       // Slightly Lighter Dark Gray
          'neutral-content': '#ffffff',     // White

          'base-100': '#121212',            // Google Material Design Dark Base
          'base-200': '#1e1e1e',            // Slightly Lighter Dark Base
          'base-300': '#333333',            // Darker Gray
          'base-content': '#ffffff',        // White

          'info': '#2196f3',                // Blue
          'success': '#4caf50',             // Green
          'warning': '#ff9800',             // Orange
          'error': '#f44336'                // Red
        }
      }
    ],
  },
};
export default config;
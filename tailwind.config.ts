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

          'info': '#2094f3',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',

        },
        'dark': {
          'primary': '#2F6540',          // Dark Green
          'primary-focus': '#1C3425',    // Very Dark Green
          'primary-content': '#ffffff',  // White
          'secondary': '#E5DBBD',        // Light Beige
          'secondary-focus': '#D6CCB8',  // Lighter Beige
          'secondary-content': '#1C3425', // Very Dark Green
          'accent': '#FEEFCD',           // Light Yellow
          'accent-focus': '#D6CCB8',     // Lighter Beige
          'accent-content': '#1C3425',   // Very Dark Green
          'neutral': '#3d4451',          // Neutral Gray
          'neutral-focus': '#2a2e37',    // Darker Gray
          'neutral-content': '#ffffff',  // White
          'base-100': '#1C3425',         // Very Dark Green
          'base-200': '#2F6540',         // Dark Green
          'base-300': '#3d4451',         // Neutral Gray
          'base-content': '#ffffff',     // White
          'info': '#2094f3',             // Blue
          'success': '#009485',          // Green
          'warning': '#ff9900',          // Orange
          'error': '#ff5724',            // Red
        },
      }
    ],
  },
};
export default config;
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

          'base-100': '#E5DBBD',         // White
          'base-200': '#FEEFCD',         // Very Light Gray
          'base-300': '#D6CCB8',         // Light Gray

          'base-content': '#1f2937',     // Dark Gray
          'info': '#2094f3',             // Blue
          'success': '#009485',          // Green
          'warning': '#ff9900',          // Orange
          'error': '#ff5724',            // Red
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
import daisyui from "daisyui";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust the paths based on your project structure
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      xs370: "370px",
      xs: "390px",
      sm576: "576px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
      xl2: "1536px",
    },
  },
  plugins: [daisyui], // Add DaisyUI plugin here
} satisfies Config;

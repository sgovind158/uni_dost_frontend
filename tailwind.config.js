import daisyui from "daisyui";

export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}", // Adjust the paths based on your project structure
    ],
    theme: {
        extend: {},
    },
    plugins: [daisyui], // Add DaisyUI plugin here
    themes: ["light"],
};
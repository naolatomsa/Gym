/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        saira: ['"Saira Condensed"', "sans-serif"], // Add the Saira Condensed font here
      },
      lineHeight: {
        90: "0.9", // Custom line-height 90%
      },
    },
  },
  plugins: [],
};

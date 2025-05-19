/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        minty: '#cefff4',
        lred: '#f02652',
        midblue: '#006eff',
        boldpurple: '#4845fd', 
        borderblue: '#062c4c',
      },
      fontFamily: {
        'amatic-sc': ['var(--font-amatic-sc)', 'cursive'],
        'source-code-pro': ['var(--font-source-code-pro)', 'monospace'],
        'rubik': ['var(--font-rubik)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
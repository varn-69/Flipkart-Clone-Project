/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fkBlue: {
          DEFAULT: '#2874f0',
          dark: '#1c52a8',
          light: '#2a55e5',
        },
        fkYellow: {
          DEFAULT: '#ffe500',
          dark: '#ff9f00',
        },
        fkGreen: {
          DEFAULT: '#388e3c',
        },
        fkBg: '#f1f2f4',
      },
    },
  },
  plugins: [],
}

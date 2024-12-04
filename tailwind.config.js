/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "serif"],
        Inter: ["Inter", "serif"],
      },
      textUnderlineOffset: {
        3: '3px',
      }
    },
  },
  plugins: [daisyui],
};

// /** @type {import('tailwindcss').Config} */
// import daisyui from "daisyui";

// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         Roboto: ["Roboto", "serif"],
//         Inter: ["Inter", "serif"],
//       },
//       textUnderlineOffset: {
//         3: "3px",
//       },
//     },
//   },
//   plugins: [daisyui],
//   daisyui: {
//     themes: ["light", "dark"],
//   },
// };

// /** @type {import('tailwindcss').Config} */
// import daisyui from "daisyui";

// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         Roboto: ["Roboto", "serif"],
//         Inter: ["Inter", "serif"],
//       },
//       textUnderlineOffset: {
//         3: "3px",
//       },
//     },
//   },
//   plugins: [daisyui],
//   // daisyui: {
//   //   themes: ["light", "dark"],
//   // },
//   darkMode: 'class',
// };

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
        3: "3px",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"], // Enables both light and dark themes for DaisyUI
  },
  darkMode: "class", // Enables Tailwind's dark mode using the `class` strategy
};

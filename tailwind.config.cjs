/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          // primary: "#DDA278",
          primary: "#985E43",

          secondary: "#D9B7A1",

          accent: "#fb923c",

          neutral: "#191D24",

          "base-100": "#2A303C",

          info: "#15803d",

          success: "#d6d3d1",

          warning: "#b91c1c",

          error: "#7f1d1d",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

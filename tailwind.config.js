/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#69f48e",

          "secondary": "#afffe4",

          "accent": "#615ce8",

          "neutral": "#2E1E33",

          "base-100": "#F8F7F8",

          "info": "#7CC0E4",

          "success": "#135E57",

          "warning": "#FAD30F",

          "error": "#F20D20",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

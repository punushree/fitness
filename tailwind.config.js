/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        'maxp': "28rem",
      },
      width: {
        "40":"45%"
      }
    },
  },
  plugins: [],
};

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        dkColor: "#020420",
        dkText: "#00dc82",
      },
    },
  },
  plugins: [require("daisyui")],
});


const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    flowbite.content(),
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      
    }
    extend: {},
  },
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};

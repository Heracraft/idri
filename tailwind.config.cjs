const colors=require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode:"class",
  theme: {
    extend:{
      colors:{
        primary:{
          DEFAULT:"#d84315",
          300:"#ff8a65",
          600:"#ff5722",
          700:"#ff3d00",
          800:"#d84315",
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addVariant }) {
      addVariant('child', '& > *');
    }
  ],
}

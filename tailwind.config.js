module.exports = {
  purge: ['./packages/**/*.{html,vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      overflow: ['hover'],
      backgroundColor: ['odd', 'even']
    },
  },
  plugins: [],
  important: true,
}

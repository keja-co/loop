module.exports = {
  purge: [],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  purge: [
         './public/**/*.html',
         './src/**/*.{js,jsx,ts,tsx,vue}',
       ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

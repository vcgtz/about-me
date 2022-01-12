module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        blink: {
          '49%': { 'background-color': '#27272a' },
          '50%': { 'background-color': 'transparent' },
          '99%': { 'background-color': 'transparent' },
        }
      },
      animation: {
        blink: 'blink 1s ease-in-out infinite',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

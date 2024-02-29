/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      colors: {
        orange: '#ee4d2d',
      },
      maxWidth: {
        '7xl': '150rem',
      },
    },
  },

  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          maxWidth: theme('maxWidth.7xl'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '100px',
          paddingRight: '100px',
        },
      })
    }),
    require('@tailwindcss/line-clamp'),
  ],
}

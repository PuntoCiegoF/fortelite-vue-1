/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2C5697',
        secondary: '#32BAD7',
        'sky-100': '#BEEAF1',
        'sky-200': '#32BCDB',
        'sky-300': '#2DBCDA',
        blue: '#224676',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


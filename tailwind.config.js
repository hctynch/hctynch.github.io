/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', ''],
        source: ['Source Code Pro', 'monospace'],
      },
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0.2 },
        '100%': { opacity: 1 },
      },
      fadeOut: {
        '0%': { opacity: 1 },
        '100%': { opacity: 0.2 },
      },
      fadeIn50: {
        '0%': { opacity: 0 },
        '100%': { opacity: 0.2 },
      },
      fadeOut50: {
        '0%': { opacity: 0.2 },
        '100%': { opacity: 0 },
      },
    },
    animation: {
      fadeIn: 'fadeIn 0.5s ease-in-out forwards',
      fadeOut: 'fadeOut 0.5s ease-in-out forwards',
      fadeIn50: 'fadeIn50 0.5s ease-in-out forwards',
      fadeOut50: 'fadeOut50 0.5s ease-in-out forwards',
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};

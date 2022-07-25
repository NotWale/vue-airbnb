/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'text-fall': {
          '0%': { transform: 'origin-[0%_50%]' },
          '50%': { transform: 'rotate3d(0, 0, 1, 107deg)' },
          '100%': { transform: 'rotateZ(102.5deg) translate3d(400px, 0 , 0)1' },
        }
      },
      animation: {
        'text-fall': 'text-fall 1s ease-in-out 1',
      }
    },
  },
  plugins: [],
}

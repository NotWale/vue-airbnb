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
        },
        'menu-fall': {
          '0%': { transform: 'rotate(3deg)' },
          '10%': { transform: 'rotate(9deg)'},
          '20%': { transform: 'rotate(15deg)'},
          '30%': { transform: 'rotate(21deg)'},
          '40%': { transform: 'rotate(27deg)'},
          '50%': { transform: 'rotate(33deg)' },
          '80%': { transform: 'rotate(50deg)'},
          '100%': { transform: 'rotate(60deg)' },
        },
        'crash': {
          '20%': { transform: 'translate(0, 20px)'},
          '30%': { transform: 'rotate(-3deg)' },
          '40%': { transform: '-translate-y-4' },
          '50%': { transform: 'rotate(3deg)'},
          '70%': { transform: 'rotate(-2deg)'},
          '100%': { }
        }
      },
      animation: {
        'text-fall': 'text-fall 1s ease-in-out 1',
        'menu-fall': 'menu-fall 1s ease-in-out 1',
        'crash': 'crash 1s',
      }
    },
  },
  plugins: [],
}

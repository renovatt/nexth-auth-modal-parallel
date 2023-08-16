/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'body-gradient':
          'radial-gradient circle, rgba(25,46,75,1) 0%, rgba(10,10,10,1) 100%)',
      },
      colors: {
        primary: {
          900: '#192e4b',
          700: '#e86f18',
          600: '#f0f0f0',
          DEFAULT: '#f0f0f0',
        },
      },
      keyframes: {
        mobile: {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
        },
        zoom: {
          from: {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        mobile: 'mobile .3s ease-in',
        zoom: 'zoom .3s forwards',
      },
    },
  },
  plugins: [],
}

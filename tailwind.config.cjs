/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['"Bebas Neue"', 'sans-serif'],
        'cormorant': ['"Cormorant Garamond"', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#A6894A',
          light: '#C9A86C',
          glow: 'rgba(166,137,74,.2)',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          surface: '#131313',
          surface2: '#1A1A1A',
          surface3: '#252525',
        },
      },
    },
  },
  plugins: [],
};

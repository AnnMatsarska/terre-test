/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        arsenal: ['Arsenal', 'sans'],
        sans: ['Lora', 'sans'],
        montez: ['Montez', 'cursive'],
      },
      colors: {
        primary: 'rgb(22, 22, 22);',
        secondary: {
          green: 'rgb(0, 133, 122);',
        },
      },
      cursor: {
        custom: 'url("/cursor.png"), auto',
      },
      screens: {
        mob: '360px',
        xs: '480px',
        '2xl': '1600px',
      },
      backgroundImage: {
        hero: "url('/hero-bg.jpg')",
        historymob: "url('/mob-bg.png')",
        historytab: "url('/tab-bg.png')",
        about: "url('/ab-1.jpg')",
      },
    },
  },
  plugins: [],
};

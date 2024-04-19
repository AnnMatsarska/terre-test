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
        mob: { max: '375px' },
        '2xl': '1600px',
      },
      backgroundImage: {
        hero: "url('/hero-bg.jpg')",
        history: "url('/historydesc-bg.svg')",
        historymob: "url('/historymob-bg.svg')",
        historytab: "url('/historytab-bg.svg')",
        about: "url('/ab-1.jpg')",
        schedule: "url('/schedule-bg.svg')",
        scheduletab: "url('/schedule-tab.svg')",
        schedulemob: "url('/schedule-mob.svg')",
        booking: "url('/booking-bg.jpg')",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        arsenal: ['Arsenal', 'sans-serif'],
        serif: ['Lora', 'serif'],
        montez: ['Montez', 'cursive'],
      },
    },
  },
  plugins: [],
};

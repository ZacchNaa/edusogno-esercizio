/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-wave': "url('/src/assets/background.png')",
       },
       screens: {
        'sm': '640px',
  
        'md': '768px',
  
        'lg': '1024px',
  
        'xl': '1280px',
  
        '2xl': '1536px',
      },
      colors: {
        'white': '#ffffff',
        'blueblack': '#134077',
        'blue': '#0057FF',
        'lightblue': '#D9E5F3',
        'shadowBlue': '#0057FF70',
        'muted': '#CCCCCC',
        'metal': '#2D224C',
        'dark': '#231F20',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


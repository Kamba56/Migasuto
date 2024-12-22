/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'authbg': "url('../images/authimg.png')",

      },
      fontFamily: {
        'poppin': ["Poppins", "sans-serif"]
      },
      colors: {
        blue: {
          10: '#465FF1',
          20: '#336DBA',
          100: '#26203B'
        },
        grey: {
          10: '#ECF0FF',
          20: '#9C9AA5'
        }
      }
    },
  },
  plugins: [],
}


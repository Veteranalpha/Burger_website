/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    screens:{
      sm:"480px",
      md: "760px",
      lg: "1024px"
    },
    extend: {
      colors:{
        primaryColor: '#FFA500',
        primaryColorLight:'#f5f5f5',
        whitelightColour: '#ECECEC',
        secondaryColor: '#fcb81c',
        paragraphColor: '#404040',
        blackcolor: '#311d1d',
        redcolor: '#cc3433',
        darkColor: '#000',
        darkColorLight: '#171717',
        greenColor: '#59B512',
        lightPink: 'ffd1df'
      },
      keyframes: {
        move:{
          "50%": {transform: 'translateY(1rem)'}
        }
      },
      animation: {
        'movingY': 'move 2s linear infinite'
      }
    },
    container: {
      center:true,
      padding: {
        DEFAULT: '1rem',
        sm:'1.5rem'
      }
    },
    fontFamily: {
      poppins: ['Poppins','sans-serif'],
      Pacifico: ['Pacifico','sans-serif']
    },
    fontWeight: {
      normalSize : ['400']
      
    }

  },
  plugins: [],
}
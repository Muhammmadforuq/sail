/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1556px',
    },
  
    extend: {
      fontFamily:{
        'open-sans':['Open Sans', 'sans-serif'],
        'arial': ['Arial', 'sans-serif'],
      },

      maxWidth:{
        60:'240px',
        100:"31.25rem"
      },
      maxHeight:{
        100:"31.25rem"
      },
      fontSize:{
        xss:['0.8125rem'],
        smm:['0.9375rem','1.4063rem']
      },
      colors:{
        brand:{
          backwall:'#f6f7f9',
          red:'#d22630',
          'red-100':'#ee3339',
          yellow:{
            100:"#fda239",
            200:'#ffbc53',
          },
          gray:{
            50:'#cbcccd',
            100:'#333333',
            150:'#4d4d4d',
            200:"#ebebeb",
            300:"#323334",
            400:'#e6e6e6'
          }
        }
      },
      boxShadow:{
        card:'0 0 1px rgba(0,0,0,.5)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
  ],
}


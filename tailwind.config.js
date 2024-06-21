/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.js'],
  theme: {
    screens:{
      mobile:'375px',
      desktop:'1440px'
    },
  
    
    extend: {
      fontFamily:{
        'spartan':['League Spartan','sans-serif'],
        'dm': ['DM Sans', 'sans-serif']
      },
      colors:{
        'darkGray': 'hsl(0,0%,63%)',
        'veryDarkGray': 'hsl(0,0%,27%)'
      },
      transitionProperty:{
        "height":'height'
      },

      
      gridTemplateRows:{
        "upperRows":"65% 35%" 
      },

      gridTemplateColumns:{
        "upperCols":"60% 40%",
        "lowerCols": "1fr 1.4fr 1fr"   
      }

     
        
      
    },
  },
  plugins: [],
}


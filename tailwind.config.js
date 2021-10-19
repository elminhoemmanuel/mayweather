module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {

      backgroundImage: theme => ({
        'hero-bg': "url('/images/farmhero.jpg')",
      }),
      colors: {
        bgblack:"#100E1D",
        bggray:"#1E213A",
        bgbtn:"#6E707A",
        maytext:"#E7E7EB",
        textleft:"#88869D",
        mayyellow:"#FFEC65",
        inputtext:"#616475",
        btnblue:"#3C47E9",
      }
    },

    screens: {
      'xs': '330px',
      // => @media (min-width: 330px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1025px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    }
  },
  plugins: [],
}

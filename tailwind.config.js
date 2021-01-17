module.exports = {
  purge: ['./pages/**/*.js',
    // './components/**/*.js'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    theme: {
      // colors: {
      //   gray: colors.coolGray,
      //   blue: colors.lightBlue,
      //   red: colors.rose,
      //   pink: colors.fuchsia,
      // },
      maxWidth: {
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      screens: {
        sm: '480px',
        md: '730px',
        lg: '976px',
        xl: '1440px',
      },
      extend: {
        // spacing: {
        //   '128': '32rem',
        //   '144': '36rem',
        // },
        // borderRadius: {
        //   '4xl': '2rem',
        // }
      }
    }
  },
  variants: {
    extend: {
      textOpacity: ['dark']
    }
  },
  plugins: [],
}

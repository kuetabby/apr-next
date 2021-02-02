module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    theme: {
      typography: (theme) => ({}),
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
  plugins: [require('@tailwindcss/typography')],
}

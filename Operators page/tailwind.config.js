module.exports = {
  content: [
    "./dist/**/*.{html,js}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {},
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'flame': '#F56064',
      'gray': {
        DEFAULT: '#7F8390',
          '50': '#FAFAFA',
          '100': '#ECEDEE',
          '200': '#D1D2D7',
          '300': '#B5B8BF',
          '400': '#9A9DA7',
          '500': '#7F8390',
          '600': '#666A75',
          '700': '#4E515A',
          '800': '#37393F',
          '900': '#1F2023'
      },
    },
  },
}

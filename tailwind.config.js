module.exports = {
  mode: 'jit',
  plugins: [
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              fontWeight: 700,
            },
          },
        },
      }
    },
  },
}
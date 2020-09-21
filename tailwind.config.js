module.exports = {
  purge: {
    enabled: true, content: [
      './src/**/*.html',
      './src/**/*.jsx',
      './src/**/*.js',
    ]
  },
  theme: {
    extend: {
      colors: {
        gray: {
          text: "#98A9BC",
          bg: "#F4F6F5",
          border: "#E8ECEF",
          dark: "#323A4A",
          light: "#EFF0F6",
        }
      },
    }
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  variants: {},
  plugins: []
}

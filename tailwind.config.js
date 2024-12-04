module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#ffffff',
          text: '#333333',
        },
        dark: {
          bg: '#1a202c',
          text: '#f7fafc',
        },
        primary: '#4CAF50', // Customize primary color
        secondary: '#FF5722',
      },
    },
  },
  plugins: [],
};

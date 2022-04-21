module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-dark":{
          700: '#3b3a3a',
          800: '#252323',
          900: '#111111',
        },
        "primary-orange":"#3cdc84",
        "primary-light":"#f5f5f5",
      }
    },
  },
  plugins: [],
}

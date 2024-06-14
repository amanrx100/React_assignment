/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bgm': "url('./assets/bg.png')",
        'loginbg': "url(./assets/cool-background.svg)",
      },
    },
  },
  plugins: [],
}


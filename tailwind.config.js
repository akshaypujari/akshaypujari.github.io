// tailwind.config.js
module.exports = {
  content: [
    "./_includes/**/*.{html,js,md}",
    "./_layouts/**/*.{html,js,md}",
    "./_pages/**/*.{html,js,md}",
    "./_posts/**/*.{html,js,md}",
    "./*.{html,md}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
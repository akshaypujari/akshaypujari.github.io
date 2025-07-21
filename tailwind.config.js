// tailwind.config.js
module.exports = {
  content: [
    "./_includes/**/*.{html,js,md}",
    "./_layouts/**/*.{html,js,md}",
    "./_pages/**/*.{html,js,md}",
    "./_posts/**/*.{html,js,md}",
    "./_publications/**/*.{html,js,md}",
    "./*.{html,md}",
    "./assets/**/*.{js,css}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: "#1e3a8a",    // your indigo-800
        secondary: "#374151",  // your gray-700
        text: "#1f2937",       // your gray-800
        page: "#f9fafb",       // your gray-50
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
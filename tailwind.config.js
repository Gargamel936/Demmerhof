/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'pony-blue': '#1565c0',
        'pony-pink': '#ad1457',
        'pony-orange': '#e65100',
        'pony-green': '#558b2f',
      },
    },
  },
  plugins: [],
}

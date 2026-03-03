/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app.vue",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./composables/**/*.{js,ts}",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

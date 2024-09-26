/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // You can adjust this if needed
        secondary: '#10B981',
        accent: '#8B5CF6',
        'light-green': '#D1FAE5',
        'dark-green': '#065F46',
      },
    },
  },
  plugins: [],
}
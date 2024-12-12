/** @type {import('tailwindcss').Config} */
export default {
  important: true, // Tailwind стильдеріне !important қосады
  content: [
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}


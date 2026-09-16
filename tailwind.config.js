/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './*/index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1B4F8A',
          DEFAULT: '#2E75B6',
          light: '#4A90D9',
        },
        // Delivery & Logistics division accent — deliberately distinct from
        // the Technology division's blue (grounded teal instead of the AI/
        // tech gradient look) while staying in the same professional palette.
        delivery: {
          dark: '#115E59',
          DEFAULT: '#0F766E',
          light: '#14B8A6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

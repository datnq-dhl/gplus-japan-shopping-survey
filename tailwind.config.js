/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0C2461',
          'navy-dark': '#071538',
          'navy-light': '#1E3A8A',
          sakura: '#E91E8C',
          'sakura-light': '#F472B6',
          'sakura-soft': '#FDF2F8',
          ice: '#EFF4FB',
          gold: '#D97706',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 12px rgba(12, 36, 97, 0.06)',
        'card': '0 8px 30px rgba(12, 36, 97, 0.08)',
        'glow-sakura': '0 0 20px rgba(233, 30, 140, 0.25)',
        'glow-navy': '0 0 20px rgba(12, 36, 97, 0.25)',
      }
    },
  },
  plugins: [],
}

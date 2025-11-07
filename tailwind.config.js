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
        'mauve-profond': '#6B46C1',
        'bleu-gris': '#64748B',
        'gris-clair': '#F8FAFC',
      },
      fontFamily: {
        'orbitron': ['var(--font-orbitron)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pearl:  '#FAFAF7',
        gold:   '#B9985A',
        palm:   '#8C6A4A',
        coffee: '#3A2E22',
        'gold-light': '#D4B97A',
        'gold-pale':  '#F0E8DA',
      },
      fontFamily: {
        arabic: ['Noto Naskh Arabic', 'serif'],
        display: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'sadu': "url('/sadu-pattern.svg')",
      },
    },
  },
  plugins: [],
}
export default config

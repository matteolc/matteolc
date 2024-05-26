import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  darkMode: ['class', '[data-mode="dark"]'],
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      display: ['DM Mono', ...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [
    require('@headlessui/tailwindcss'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
} satisfies Config

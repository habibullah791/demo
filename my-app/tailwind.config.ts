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
        'primary-color' : '#FF5C35',
        'secondary-color' : '#2E475D',
        'third-color' : '#F3F4EA',
      },
    },
  },
  plugins: [],
}
export default config

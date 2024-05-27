import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './node_modules/flowbite-react/lib/**/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
    },
    fontFamily: {
      Montserrat: ['Montserrat', 'sans-serif'],
      Satisfy: ['Satisfy', 'cursive'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [require('flowbite/plugin')],
}
export default config

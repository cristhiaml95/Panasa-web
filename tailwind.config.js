/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'janda-blue': '#00BFFF',
        'janda-cyan': '#17D5E5',
        'janda-yellow': '#FFD700',
        'janda-orange': '#FF8C00',
        'janda-green': '#32CD32',
        'janda-purple': '#9C27B0',
        'janda-navy': '#1E3A8A',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
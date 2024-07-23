/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {
      minWidth: {
        "sidebar": "300px"
      },
      colors: {
        'std': '#2852A4',
        'lite': '#ADD8E650',
        'hover': '#005000',
        'active': '#009900'
      },
      rotate: {
        '270': '270deg'
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}"
  ],
  theme: {
    extend: {
      screens: {
        tv: '1600px'
      },
      colors: {
        m_blue: {
          100: "#093747"
        },
        m_orange: {
          100: "#FF630D"
        },
        m_gray: {
          100: '#FDFDFD',
          200: '#A0A0A0',
          300: '#A8A8A8',
          400: '#F5F5F5',
          500: '#4C514C',
          600: '#B9B9B9',
          700: '#ECEEEC',
          800: '#C7C7C7',
          900: '#808080'
        },
        m_amber: {
          100: '#2D2828'
        },
      },
      fontFamily: {
        jetBrains: ['JetBrains Mono', 'monospace'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        bodoni: ['Bodoni Moda', 'serif'],
      },
    },
    container: {
      center: true,
      padding: '10px',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00BBD4',
        secondary: '#ffffff',
        accent: '#0097A7',
        neutral: '#f8fafc',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #00BBD4 0%, #0097A7 100%)',
        'gradient-accent': 'linear-gradient(135deg, #0097A7 0%, #006064 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

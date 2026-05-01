/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e8eef5',
          100: '#c5d3e8',
          200: '#9db5d6',
          300: '#7497c4',
          400: '#5480b5',
          500: '#3469a6',
          600: '#2a5490',
          700: '#1e3f75',
          800: '#142c5c',
          900: '#102e50',
          950: '#0a1e38',
        },
        gold: {
          50: '#fef9e7',
          100: '#fdf0c0',
          200: '#fce488',
          300: '#f5c45e',
          400: '#f0b132',
          500: '#e8981a',
          600: '#c97b10',
          700: '#a85e0e',
          800: '#8a4b12',
          900: '#6e3c13',
        },
        amber: {
          holiday: '#F5C45E',
          warm: '#E87E3E',
          fire: '#C84B2B',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F5C45E 0%, #E87E3E 100%)',
        'navy-gradient': 'linear-gradient(135deg, #102e50 0%, #1e3f75 100%)',
        'hero-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23102e50' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(245, 196, 94, 0.4)' },
          '50%': { boxShadow: '0 0 0 20px rgba(245, 196, 94, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'gold': '0 4px 24px rgba(245, 196, 94, 0.3)',
        'navy': '0 8px 32px rgba(16, 46, 80, 0.2)',
        'card': '0 2px 16px rgba(16, 46, 80, 0.08)',
        'card-hover': '0 16px 48px rgba(16, 46, 80, 0.16)',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#08090c',
        ink: {
          950: '#08090c',
          900: '#0e1016',
          850: '#14171f',
          800: '#1b1f2a',
          700: '#262b38',
          600: '#353b4a',
          500: '#4b5163',
          400: '#6d7386',
          300: '#9a958c',
          200: '#c4bfb4',
          100: '#e8e4dc',
        },
        champagne: {
          50: '#fbf6ea',
          100: '#f3e6c8',
          200: '#e8d2a0',
          300: '#d4b483',
          400: '#c9ae7c',
          500: '#b89554',
          600: '#9a7840',
        },
        signal: {
          200: '#c5d8d5',
          300: '#9bb8b4',
          400: '#7a9e9a',
          500: '#5d827e',
        },
        success: {
          400: '#7dba8a',
          500: '#5a9a68',
        },
        error: {
          400: '#d98880',
          500: '#c45c52',
        },
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        body: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      maxWidth: {
        site: '1180px',
      },
      boxShadow: {
        glow: '0 0 40px rgba(201, 174, 124, 0.12)',
        lift: '0 24px 60px rgba(0, 0, 0, 0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        marquee: 'marquee 36s linear infinite',
        'spin-slow': 'spin 24s linear infinite',
        'spin-slower': 'spin 48s linear infinite',
        float: 'float 8s ease-in-out infinite',
        'scroll-bounce': 'scrollBounce 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        profileFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        auroraDrift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)', opacity: '0.7' },
          '50%': { transform: 'translate3d(24px, 16px, 0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'grid-fine':
          'linear-gradient(rgba(232,228,220,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(232,228,220,0.04) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};

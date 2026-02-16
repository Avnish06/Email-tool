/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Sky Blue (Matching Mockup)
        primary: {
          DEFAULT: '#0ea5e9',
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // Neutral Colors - Deep Blue/Dark Mode
        background: '#0b1121',
        foreground: '#ffffff',
        border: '#334155',
        input: '#0f1724',
        muted: {
          DEFAULT: '#1e293b',
          foreground: '#94a3b8',
        },
        secondary: {
          DEFAULT: '#1e293b',
          foreground: '#94a3b8',
        },
        card: {
          DEFAULT: '#111827',
          foreground: '#ffffff',
        },
        // Sidebar Colors - Dark mode
        sidebar: {
          DEFAULT: '#08101a',
          foreground: '#9fbfda',
          primary: '#062433',
          'primary-foreground': '#dff7ff',
        },
        // Status Colors
        success: {
          DEFAULT: '#10b981',
          foreground: '#031914',
        },
        warning: {
          DEFAULT: '#f59e0b',
          foreground: '#2b1500',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#2b0505',
        },
        accent: {
          DEFAULT: '#38bdf8',
          foreground: '#021033',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['DM Sans', 'Inter', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '16px' }],
        sm: ['13px', { lineHeight: '20px' }],
        base: ['14px', { lineHeight: '24px' }],
        lg: ['16px', { lineHeight: '28px' }],
        xl: ['18px', { lineHeight: '28px' }],
        '2xl': ['20px', { lineHeight: '32px' }],
        '3xl': ['24px', { lineHeight: '36px' }],
        '4xl': ['32px', { lineHeight: '40px' }],
        '5xl': ['40px', { lineHeight: '48px' }],
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '6px',
        md: '6px',
        lg: '8px',
        xl: '12px',
        '2xl': '16px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};

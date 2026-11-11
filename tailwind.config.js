/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#06080f',
          900: '#0a0e1a',
          850: '#0e1320',
          800: '#111827',
          700: '#1a2030',
          600: '#242b3d',
        },
        electric: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        accent: {
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          950: '#2e1065',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['Sora', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-slower': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'dash': 'dash 20s linear infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'scroll-down': 'scrollDown 2s ease-in-out infinite',
        'gradient-pan': 'gradientPan 6s ease-in-out infinite',
        'qa-rise': 'qaRise linear infinite',
        'qa-sway': 'qaSway ease-in-out infinite alternate',
        'qa-bug-out': 'qaBugOut linear infinite',
        'qa-check-in': 'qaCheckIn linear infinite',
        'qa-fix-ping': 'qaFixPing linear infinite',
        'qa-scan': 'qaScan 16s cubic-bezier(0.45, 0, 0.55, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        dash: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        qaRise: {
          '0%': { transform: 'translateY(108vh)' },
          '100%': { transform: 'translateY(-12vh)' },
        },
        qaSway: {
          '0%': { transform: 'translateX(-18px) rotate(-8deg)' },
          '100%': { transform: 'translateX(18px) rotate(8deg)' },
        },
        // Bug and check share the rise duration, so the bug "gets fixed" halfway up the screen.
        qaBugOut: {
          '0%, 46%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
          '54%, 100%': { opacity: '0', transform: 'scale(0.3) rotate(120deg)' },
        },
        qaCheckIn: {
          '0%, 50%': { opacity: '0', transform: 'scale(0.3)' },
          '57%': { opacity: '1', transform: 'scale(1.25)' },
          '62%, 100%': { opacity: '1', transform: 'scale(1)' },
        },
        qaFixPing: {
          '0%, 49%': { opacity: '0', transform: 'scale(0.4)' },
          '52%': { opacity: '0.7', transform: 'scale(0.8)' },
          '62%, 100%': { opacity: '0', transform: 'scale(2.6)' },
        },
        qaScan: {
          '0%': { transform: 'translateY(-15vh)', opacity: '0' },
          '5%': { opacity: '1' },
          '55%': { transform: 'translateY(110vh)', opacity: '1' },
          '56%, 100%': { transform: 'translateY(110vh)', opacity: '0' },
        },
        gradientPan: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        scrollDown: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.4' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

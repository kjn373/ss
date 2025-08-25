import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: '#0b1c68',
        secondary: '#ed1c24',
        heading: '#313131',
        body: '#5D5F69',
        background: '#F8FAFD ',
        border: '#E7EEF8',
        primaryLighter: '#F1F7FB',
        primaryLight: '#CDDFED',
        primaryDark: '#1A86CC',
        secondaryLighter: '#FDF6F0',
        secondaryLight: '#F7DCC4', // Educational Tour border
        shadowBorder: '#FAFAFA',
        error: '#B91C1C',
        errorLight: '#FECDC9', //  Holiday border
        errorLighter: '#FEEEEC',
        success: '#166534',
        successLighter: '#DCFCE7', // Exam Routine background
        sucessLight: '#7BF4A5',
        successBg: '#DCFCE7',
        grayBackground: '#F8F8FA',
        grayLighter: '#F5F5F5', // club and sports background
        grayLight: '#DEDEDE', // club and sports border
        brown: '#8B5A2F',
        brownLighter: '#FDF8ED',
        brownLight: '#F0E1CC',
        Textgray: '#262829',
      },
      screens: {
        '2lg': '1270px',
        '2xl_md': '1400px',
        '2xl_lg': '1700px',
        '3xl': '1800px',
        '4xl': '1900px',
        '5xl': '2000px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontFamily: {
        workSans: ['var(--font-workSans)'],
        poppins: ['var(--font-poppins)'],
        inter: ['var(--font-inter)'],
      },
      transitionDuration: {
        '1500': '1500ms',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config

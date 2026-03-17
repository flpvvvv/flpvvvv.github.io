import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Luxury academic palette - refined, deep tones
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        // Deep accent for dramatic contrast
        accent: {
          50: '#fdf4f3',
          100: '#fce8e6',
          200: '#f9d5d1',
          300: '#f4b5ad',
          400: '#ec8a7d',
          500: '#e06452',
          600: '#cb4636',
          700: '#aa382a',
          800: '#8d3228',
          900: '#762f28',
          950: '#401510',
        },
        neutral: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          850: '#1f1d1b',
          900: '#1c1917',
          950: '#0c0a09',
        },
      },
      fontFamily: {
        // Refined sans-serif for body - Instrument Sans has distinctive character
        sans: ['Instrument Sans', 'Inter', 'system-ui', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        // Serif for accent - Crimson Pro for elegant contrast
        serif: ['Crimson Pro', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        // Monospace for code - technical identity
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
      },
      fontSize: {
        // Dramatic scale for hero and headings
        'hero': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '700' }],
        'heading': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      typography: ({ theme }: { theme: (path: string) => string }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.neutral.700'),
            '--tw-prose-headings': theme('colors.neutral.900'),
            '--tw-prose-lead': theme('colors.neutral.600'),
            '--tw-prose-links': theme('colors.primary.600'),
            '--tw-prose-bold': theme('colors.neutral.900'),
            '--tw-prose-counters': theme('colors.neutral.500'),
            '--tw-prose-bullets': theme('colors.neutral.300'),
            '--tw-prose-hr': theme('colors.neutral.200'),
            '--tw-prose-quotes': theme('colors.neutral.700'),
            '--tw-prose-quote-borders': theme('colors.primary.500'),
            '--tw-prose-captions': theme('colors.neutral.500'),
            '--tw-prose-code': theme('colors.primary.700'),
            '--tw-prose-pre-code': theme('colors.neutral.100'),
            '--tw-prose-pre-bg': theme('colors.neutral.900'),
            '--tw-prose-th-borders': theme('colors.neutral.300'),
            '--tw-prose-td-borders': theme('colors.neutral.200'),
            fontFamily: theme('fontFamily.sans').join(', '),
            fontSize: '1.125rem',
            lineHeight: '1.75',
            maxWidth: '72ch',
            p: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            h1: {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontWeight: '700',
              fontSize: 'clamp(2.5rem, 5vw, 3rem)',
              letterSpacing: '-0.015em',
              marginTop: '2em',
              marginBottom: '0.75em',
            },
            h2: {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontWeight: '600',
              fontSize: 'clamp(1.5rem, 3vw, 1.875rem)',
              letterSpacing: '-0.01em',
              marginTop: '2em',
              marginBottom: '0.75em',
            },
            h3: {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontWeight: '600',
              fontSize: '1.25rem',
              letterSpacing: '-0.005em',
              marginTop: '1.75em',
              marginBottom: '0.5em',
            },
            h4: {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontWeight: '600',
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },
            code: {
              fontFamily: theme('fontFamily.mono').join(', '),
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              fontFamily: theme('fontFamily.mono').join(', '),
              borderRadius: '0.75rem',
              padding: '1.25rem 1.5rem',
            },
            blockquote: {
              borderLeftWidth: '3px',
              paddingLeft: '1.5rem',
              fontStyle: 'italic',
              fontWeight: '400',
              color: theme('colors.neutral.600'),
              marginTop: '2em',
              marginBottom: '2em',
            },
            'blockquote p:first-of-type::before': {
              content: 'none',
            },
            a: {
              textDecoration: 'none',
              textUnderlineOffset: '3px',
              textDecorationThickness: '1px',
            },
            'a:hover': {
              textDecoration: 'underline',
            },
            hr: {
              marginTop: '3em',
              marginBottom: '3em',
            },
            ul: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            ol: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            li: {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
          },
        },
        dark: {
          css: {
            '--tw-prose-body': theme('colors.neutral.300'),
            '--tw-prose-headings': theme('colors.neutral.100'),
            '--tw-prose-lead': theme('colors.neutral.400'),
            '--tw-prose-links': theme('colors.primary.400'),
            '--tw-prose-bold': theme('colors.neutral.100'),
            '--tw-prose-counters': theme('colors.neutral.400'),
            '--tw-prose-bullets': theme('colors.neutral.600'),
            '--tw-prose-hr': theme('colors.neutral.700'),
            '--tw-prose-quotes': theme('colors.neutral.300'),
            '--tw-prose-quote-borders': theme('colors.primary.500'),
            '--tw-prose-captions': theme('colors.neutral.400'),
            '--tw-prose-code': theme('colors.primary.300'),
            '--tw-prose-pre-code': theme('colors.neutral.200'),
            '--tw-prose-pre-bg': theme('colors.neutral.850'),
            '--tw-prose-th-borders': theme('colors.neutral.600'),
            '--tw-prose-td-borders': theme('colors.neutral.700'),
          },
        },
      }),
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in': 'slideIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Academic minimalist palette - warm grays with teal accents
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
          900: '#1c1917',
        },
      },
      fontFamily: {
        // Serif for body text - elegant and readable
        serif: ['Crimson Pro', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        // Monospace for code - technical identity
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
        // Sans for UI elements
        sans: ['Inter', 'system-ui', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
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
            fontFamily: theme('fontFamily.serif').join(', '),
            fontSize: '1.125rem',
            lineHeight: '1.8',
            maxWidth: '72ch',
            h1: {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontWeight: '700',
            },
            h2: {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontWeight: '600',
            },
            h3: {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontWeight: '600',
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
            },
            blockquote: {
              borderLeftWidth: '4px',
              paddingLeft: '1.5rem',
              fontStyle: 'italic',
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
            '--tw-prose-pre-bg': theme('colors.neutral.800'),
            '--tw-prose-th-borders': theme('colors.neutral.600'),
            '--tw-prose-td-borders': theme('colors.neutral.700'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
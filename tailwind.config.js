const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

const symbol = '❯'

module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './layouts/**/*.js',
    './lib/**/*.js',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: colors.neutral,
        day: '#f8f6f4',
        night: '#18191a',
        'day-accent': '#0284c7', // 600
        'day-accent-hover': '#0369a1', // 700
        'night-accent': '#0ea5e9', // 500
        'night-accent-hover': '#38bdf8', // 400
        warning: '#f3722c',
        important: '#3498db',
        caution: '#f94144',
        tip: '#06d6a0',
        note: '#62b6cb',
        question: '#277da1',
        quote: '#43aa8b',
        comment: '#6184d8',
        docs: '#7768ae',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.day-accent'),
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                color: theme('colors.day-accent-hover'),
                textDecoration: 'underline',
              },
              code: {
                color: theme('colors.day-accent'),
              },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.900'),
            },
            'h2, h3': {
              'scroll-margin-top': '16px',
            },
            'h4, h5, h6': {
              color: theme('colors.gray.900'),
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
            },
            code: {
              color: theme('colors.gray.800'),
              backgroundColor: theme('colors.gray.200'),
              borderColor: theme('colors.gray.300'),
              padding: '0.125rem 0.25rem',
              borderRadius: '0.25rem',
              borderWidth: '1px',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            details: {
              backgroundColor: theme('colors.gray.200'),
              borderColor: theme('colors.gray.300'),
              borderRadius: '0.25rem',
              borderWidth: '1px',
              padding: '0.5rem',
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
              cursor: 'pointer',
              '--tw-shadow': '0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)',
              '--tw-border-opacity': '1',
              '--tw-bg-opacity': '0.5',
              '&:hover': {
                '--tw-shadow': '0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06)',
                boxShadow:
                  'var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)',
              },
            },
            'details>summary': {
              marginRight: '1rem',
              marginLeft: '1rem',
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
              fontSize: '1.125rem',
              lineHeight: '1.75rem',
              fontWeight: '700',
            },
            'details[open]>summary': {
              borderBottomWidth: '2px',
              '--tw-bg-opacity': '1',
              borderColor: theme('colors.gray.300'),
            },
            'details>summary>p': {
              margin: '0px',
              display: 'inline-block',
            },
            summary: {
              display: 'list-item',
            },
            hr: { borderColor: theme('colors.gray.200') },
            ul: {
              padding: '0px',
              li: {
                listStyle: 'none',
                position: 'relative',
                paddingLeft: '1.5rem',
                '&:before': {
                  position: 'absolute',
                  fontWeight: '600',
                  left: '0',
                  paddingTop: '0px',
                  paddingRight: '0.5rem',
                  content: `"${symbol}"`,
                  color: theme('colors.day-accent'),
                },
              },
            },
            ol: {
              padding: '0px',
              li: {
                listStyle: 'none',
                position: 'relative',
                paddingLeft: '1.5rem',
                '&:before': {
                  all: 'unset',
                  position: 'absolute',
                  fontWeight: '600',
                  left: '0',
                  paddingTop: '0px',
                  paddingRight: '0.5rem',
                  content: `"${symbol}"`,
                  color: theme('colors.day-accent'),
                },
              },
            },
            li: {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            },
            strong: {
              color: theme('colors.gray.800'),
              fontWeight: '600',
            },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.night-accent'),
              '&:hover': {
                color: theme('colors.night-accent-hover'),
              },
              code: { color: theme('colors.night-accent') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.100'),
            },
            'h4, h5, h6': {
              color: theme('colors.gray.100'),
            },
            code: {
              color: theme('colors.gray.200'),
              backgroundColor: theme('colors.gray.700'),
              borderColor: theme('colors.gray.600'),
            },
            details: {
              backgroundColor: theme('colors.gray.800'),
              borderColor: theme('colors.gray.600'),
              '--tw-border-opacity': '1',
              '--tw-bg-opacity': '1',
            },
            'details[open]>summary': {
              borderBottomWidth: '2px',
              '--tw-bg-opacity': '1',
              borderColor: theme('colors.gray.600'),
            },
            hr: { borderColor: theme('colors.gray.700') },
            ul: {
              li: {
                '&:before': {
                  content: `"${symbol}"`,
                  color: theme('colors.night-accent'),
                },
              },
            },
            ol: {
              li: {
                '&:before': {
                  content: `"${symbol}"`,
                  color: theme('colors.night-accent'),
                },
              },
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              th: {
                color: theme('colors.gray.100'),
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.700'),
            },
          },
        },
      }),
      keyframes: {
        shrink: {
          '0% , 100%': {
            height: '0.75rem',
          },
          '50%': {
            height: '0.375rem',
          },
        },
        expand: {
          '0% , 100%': {
            height: '0.375rem',
          },
          '50%': {
            height: '0.75rem',
          },
        },
      },
      animation: {
        shrink: 'shrink 1.5s infinte',
        expand: 'expand 1.5s infinte',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}

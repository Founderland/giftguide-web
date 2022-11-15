/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        5: '5px',
      },
      spacing: {
        5.5: '22px',
        7: '30px',
        15: '60px',
        18: '72px',
        26: '94px',
      },
      colors: {
        valid: {
          DEFAULT: '#12ED55',
        },
        fgray: {
          DEFAULT: '#707070',
        },
        fblue: {
          DEFAULT: '#0063e2',
          50: '#3295ff',
          100: '#288bff',
          200: '#1e81ff',
          300: '#1477f6',
          400: '#0a6dec',
          500: '#0063e2',
          600: '#0059d8',
          700: '#004fce',
          800: '#0045c4',
          900: '#003bba',
        },
        fred: {
          DEFAULT: '#f6331c',
          50: '#ff654e',
          100: '#ff5b44',
          200: '#ff513a',
          300: '#ff4730',
          400: '#ff3d26',
          500: '#f6331c',
          600: '#ec2912',
          700: '#e21f08',
          800: '#d81500',
          900: '#ce0b00',
        },
        fpink: {
          DEFAULT: '#ee93b5',
          50: '#ffc5e7',
          100: '#ffbbdd',
          200: '#ffb1d3',
          300: '#ffa7c9',
          400: '#f89dbf',
          500: '#ee93b5',
          600: '#e489ab',
          700: '#da7fa1',
          800: '#d07597',
          900: '#c66b8d',
        },
        flime: {
          DEFAULT: '#d7fb03',
          50: '#ffff35',
          100: '#ffff2b',
          200: '#f5ff21',
          300: '#ebff17',
          400: '#e1ff0d',
          500: '#d7fb03',
          600: '#cdf100',
          700: '#c3e700',
          800: '#b9dd00',
          900: '#afd300',
        },
        fcard: {
          DEFAULT: '#FCF9F9',
        },
      },
      fontSize: {
        xxs: '0.50rem',
        '2.5xl': ['32px', '40px'],
      },
      minHeight: (theme) => ({
        ...theme('spacing'),
      }),
    },
  },
  plugins: [],
}

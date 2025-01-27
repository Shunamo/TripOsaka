import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'BG-black': '#17181C',
        main: '#EE1171',
        main2: '#FF4493',
        sub2: '#480522',
        sub1: '#8F0B48',
        gray100: '#C3C5C9',
        gray200: '#979A9F',
        gray300: '#7C7F83',
        gray400: '#4B4D4F',
        gray500: '#313335',
        gray700: '#28292A',
      },
    },
  },
  plugins: [],
};
export default config;
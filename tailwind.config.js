/**
 * This file can be used to define Tailwind configuration,
 * more info in https://tailwindcss.com/docs/configuration/
 */

import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import("tailwindcss").Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './shared/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  darkMode: ['selector'],
  plugins: [],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn .25s ease-in-out',
        fadeOut: 'fadeOut .25s ease-in-out',
        toast: 'toast 5s ease-in-out',
      },
      colors: {
        'primary-dark': '#007ae6',
        'primary-light': '#4dacff',
        'primary-main': '#0088ff',
      },
      fontFamily: {
        mono: [...fontFamily.mono],
        sans: [...fontFamily.sans],
        serif: [...fontFamily.serif],
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        toast: {
          '0%, 100%': {
            left: 'calc(100% + 1.5rem)',
            opacity: 0,
          },
          '5%, 95%': {
            left: 0,
            opacity: 1,
          },
        },
      },
    },
  },
};

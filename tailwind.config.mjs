/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'java-orange': '#f89820',
        'java-blue': '#5382a1',
      },
      fontFamily: {
        mono: ['JetBrains Mono Variable', 'monospace'],
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
};
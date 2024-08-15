/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{astro,html,js,jsx, ts}',
    './src/components/**/*.{astro,html,js,jsx, ts}',
  ],
  // Other configurations...
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        fira: ['Fira Code', 'monospace']
      }
    }
  },
}

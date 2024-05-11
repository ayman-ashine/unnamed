/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light": "var(--light)",
        "dark": "var(--dark)",
        "sh-light": "var(--sh-light)",
        "sh-dark": "var(--sh-dark)",
      },
    },
  },
  plugins: [],
};

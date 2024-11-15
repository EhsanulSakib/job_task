module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#287279',
        'secondary': '#F0F1EE',
        'tertiary': '#9998E1',
        'quaternary': '#F4F4F6'
      },
    },
  },
  plugins: [],
};

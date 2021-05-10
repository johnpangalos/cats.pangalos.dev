module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif:
          '"Newsreader", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

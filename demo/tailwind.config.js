module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "darker-primary": "var(--color-darker-primary)",
        accent: "var(--color-accent)",
        "darker-accent": "var(--color-darker-accent)",
        background: "var(--color-background)",
        "invert-background": "var(--color-invert-background)",
        text: "var(--color-text)",
        "invert-text": "var(--color-invert-text)",
        footer: "var(--color-footer)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

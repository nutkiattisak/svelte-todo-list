module.exports = {
  mode: "jit",
  purge: ["./public/index.html", "./src/**/*.svelte"],
  darkMode: "media",
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/img/hero-pattern.svg')",
        "footer-texture":
          "url('https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

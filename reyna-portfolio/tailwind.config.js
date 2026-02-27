/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          primaryBg: "#0B0B0F",      // negro elegante profundo
          secondaryBg: "#111118",    // dark con toque violeta
          cardBg: "#161621",         // tarjetas suaves
          accent: "#E11D74",         // rosa fuerte elegante
          accentSoft: "#F472B6",     // rosa suave
          textPrimary: "#F5F5F7",    // blanco suave
          textSecondary: "#A1A1AA",  // gris elegante
        },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
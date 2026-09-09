/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ground: "#08080A",
        surface: "#0C0D10",
        panel: "#111827",
        ember: "#E8590C",
        smoke: "#A3A3A3",
        dim: "#737373",
        faint: "#525252",
        line: "rgba(255,255,255,0.08)",
        bone: "#E5E5E5",
      },
      fontFamily: {
        headline: ["Space Grotesk", "system-ui", "sans-serif"],
        body: ["Manrope", "system-ui", "sans-serif"],
        label: ["Public Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
      },
      transitionTimingFunction: {
        snap: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

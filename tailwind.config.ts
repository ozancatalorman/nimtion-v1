import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./sections/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        mist: "#F1F5F9",
        slateMuted: "#C7D2FE",
        sand: "#F5E6D3",
        accent: {
          1: "#5DE4C7",   // mint
          2: "#7C3AED",   // purple
          3: "#F59E0B"    // amber
        }
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Inter", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"]
      }
    }
  },
  plugins: []
};
export default config;